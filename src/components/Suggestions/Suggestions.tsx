import React, { useEffect, useMemo, useState } from 'react';
import type { SuggestionsModel, SuggestModel } from '../../types';
import { CheckIcon, CloseIcon } from '../icons';
import {
  CloseButton,
  StatusLabel,
  SuggestCheckIcon,
  Suggestion,
  SuggestionHeader,
  Suggestions,
  SuggestionsWrapper,
  SuggestText,
} from './Suggestions.styles';

const SuggestionsComponent: React.FunctionComponent<SuggestionsModel> = ({
  items,
  mode,
  exclude,
  onSelection,
  onDelete,
  onCloseSuggestion,
  disableInput,
}) => {
  const [_items, setItems] = useState<SuggestModel[]>(
    items.map((item) => ({
      value: item,
      selected: false,
    })),
  );

  useEffect(() => {
    if (exclude) {
      setItems(
        _items.map((item) =>
          Object.assign({}, item, {
            selected: exclude.indexOf(item.value) > -1,
          }),
        ),
      );
    }
  }, [exclude?.length]);

  const statusLabel = useMemo(
    () =>
      `${_items.filter((item) => item.selected).length} out of ${
        _items.length
      } selected`,
    [JSON.stringify(_items)],
  );

  return _items.length ? (
    <SuggestionsWrapper>
      <SuggestionHeader>
        <StatusLabel>{statusLabel}</StatusLabel>
        <CloseButton onClick={onCloseSuggestion}>
          <CloseIcon />
        </CloseButton>
      </SuggestionHeader>
      <Suggestions mode={mode}>
        {_items.map((item, index) => (
          <Suggestion
            key={index}
            mode={mode}
            onClick={() => {
              if (!item.selected) {
                onSelection(item.value);
              } else {
                onDelete(item.value);
              }
            }}
            disable={!item.selected && disableInput}
            selected={item.selected}
          >
            <SuggestText style={{ paddingLeft: '1rem' }}>
              {item.value}
            </SuggestText>
            {item.selected && (
              <SuggestCheckIcon>
                <CheckIcon />
              </SuggestCheckIcon>
            )}
          </Suggestion>
        ))}
      </Suggestions>
    </SuggestionsWrapper>
  ) : null;
};

export { SuggestionsComponent };
