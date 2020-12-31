import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Mode, Props, TagViewModel } from '../types';
import { MainWrapper } from './main.styles';
import { SuggestionsComponent } from './Suggestions/Suggestions';
import { TagsComponent } from './Tags/Tags';

const Main: React.FunctionComponent<Props> = ({
  items,
  maxTags = 5,
  allowDuplicates = false,
  allowParsing = {
    delimiter: ',',
  },
  readOnly = false,
  suggestions = [],
  suggestionMode = Mode.LIST_MODE,
  placeholder = 'Choose an option ...',
}) => {
  const [tagItems, setTagItems] = useState<TagViewModel[]>([]);
  const [latestInput, setLatestInput] = useState('');
  const [exclSuggestions, setExclSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [message, setMessage] = useState<string>(placeholder);
  const inputRef = useRef<HTMLDivElement>(null);

  // ** computed methods

  // validate if max tags threshold is reached
  const maxTagsReached = useMemo(() => {
    return tagItems.length === maxTags;
  }, [tagItems.length]);

  // validate if duplicate is present
  const isDuplicate = useMemo(() => {
    return (
      !allowDuplicates && tagItems.some((item) => item.name === latestInput)
    );
  }, [latestInput, tagItems.length]);

  // checks if the input can be disabled
  const disableInput = useMemo(() => maxTagsReached || readOnly, [
    maxTagsReached,
    readOnly,
  ]);

  // validates if a new tag can be created
  const canCreateTag = useMemo(() => !maxTagsReached && !isDuplicate, [
    maxTagsReached,
    isDuplicate,
  ]);

  // ** Handlers

  // input handler
  const onInput = useCallback((value: string) => setLatestInput(value), []);

  // delete handler
  const onDelete = useCallback(
    (id: string) => {
      const deletedItem = tagItems.find((f) => f.id === id);
      setTagItems((items) => items.filter((item) => item.id !== id));

      if (deletedItem) {
        setExclSuggestions((prev) =>
          prev.filter((item) => item !== deletedItem.name),
        );
      }
      setMessage(placeholder);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [tagItems.length],
  );

  const toggleSuggestions = useCallback(
    () => setShowSuggestions(!showSuggestions),
    [showSuggestions],
  );

  const canShowSuggestions = useMemo(() => showSuggestions && !readOnly, [
    showSuggestions,
    readOnly,
  ]);

  const onClearTags = useCallback(() => {
    setTagItems([]);
    setExclSuggestions([]);
    setMessage(placeholder);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSaveEdit = useCallback(
    (id: string, newText: string) => {
      const tagItem = tagItems.find((item) => item.id === id);

      if (
        suggestions.indexOf(newText) > -1 &&
        exclSuggestions.every((s) => s !== newText)
      ) {
        setExclSuggestions((prev) => prev.concat(newText));
      }

      if (tagItem && suggestions.some((sug) => sug === tagItem.name)) {
        if (exclSuggestions.some((s) => s === tagItem.name)) {
          setExclSuggestions((prev) =>
            prev.filter((sug) => sug !== tagItem.name),
          );
        }
      }

      setTagItems((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return Object.assign({}, item, {
              name: newText,
              value: newText,
            });
          } else {
            return item;
          }
        }),
      );

      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [exclSuggestions],
  );

  const onSuggestionSelected = useCallback((value) => {
    setExclSuggestions((prev) => prev?.concat(value));
    setLatestInput(value);
  }, []);

  const onInputStatusChanged = useCallback((status: boolean) => {
    if (!inputRef.current) {
      return;
    }
    if (status) {
      inputRef.current.focus();
    }
  }, []);

  // ** Effects Starts here

  useEffect(() => {
    if (maxTagsReached) {
      setMessage(`You have reached the maximum tags allowed.`);
    } else if (isDuplicate) {
      setMessage(`You already have that tag.`);
    }
  }, [maxTagsReached, isDuplicate]);

  useEffect(() => {
    if (canCreateTag && latestInput) {
      const newItems = latestInput
        .split(allowParsing.delimiter)
        .slice(0, Math.max(0, maxTags - tagItems.length))
        .map((item) => ({
          name: item,
          value: item,
          id: Math.random().toString(16).slice(2),
          order: tagItems.length + 1,
        }));

      setTagItems((items) => items.concat(newItems));
      setMessage('');

      if (suggestions.some((sug) => sug === latestInput)) {
        setExclSuggestions((prev) => prev.concat(latestInput));
      }
    }

    latestInput && setLatestInput('');
  }, [latestInput]);

  useEffect(() => {
    let _items: TagViewModel[] = [];

    _items = items
      .map((item, index) =>
        Object.assign({}, item, {
          id: Math.random().toString(16).slice(2),
          readOnly: readOnly,
          order: index,
        }),
      )
      .slice(0, maxTags);

    setTagItems(_items);
    setExclSuggestions(items.map((item) => item.name));
  }, []);

  return (
    <MainWrapper>
      <TagsComponent
        disableInput={disableInput}
        inputRef={inputRef}
        items={tagItems}
        onClearTags={onClearTags}
        onDelete={onDelete}
        onInput={onInput}
        onSaveEdit={onSaveEdit}
        onToggleSuggestions={toggleSuggestions}
        readOnly={readOnly}
        validationMessage={message}
        onInputStatusChanged={onInputStatusChanged}
      />
      {canShowSuggestions && (
        <SuggestionsComponent
          disableInput={disableInput}
          exclude={exclSuggestions}
          items={suggestions}
          mode={suggestionMode}
          onCloseSuggestion={toggleSuggestions}
          onDelete={(value: string) => {
            const found = tagItems.find((item) => item.name === value);
            if (found?.id) {
              onDelete(found.id);
            }
          }}
          onSelection={onSuggestionSelected}
        />
      )}
    </MainWrapper>
  );
};

export { Main };
