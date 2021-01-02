import cls from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { Mode, SuggestionsModel, SuggestModel } from '../../types';
import { CheckIcon, CloseIcon } from '../icons';
import './Suggestions.css';

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
    <div className="suggestions-wrapper">
      <span className="sug-header">
        <span className="status-label">{statusLabel}</span>
        <button onClick={onCloseSuggestion} className="close-button">
          <CloseIcon />
        </button>
      </span>
      <ul className="suggestions">
        {_items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (!item.selected) {
                onSelection(item.value);
              } else {
                onDelete(item.value);
              }
            }}
            className={cls({
              suggestion: true,
              disabled: !item.selected && disableInput,
              selected: item.selected,
              list: mode === Mode.LIST_MODE,
            })}
          >
            <span style={{ paddingLeft: '1rem' }} className="suggestion">
              {item.value}
            </span>
            {item.selected && (
              <span className="check-icon-wrapper">
                <CheckIcon />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export { SuggestionsComponent };
