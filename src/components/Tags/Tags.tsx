import React from 'react';
import type { TagsModel } from '../../types';
import { Toolbar } from '../Tags-Toolbar/Toolbar';
import { TagComponent } from './Tag';
import { TagInputComponent } from './TagsInput';
import "./Tags.css";

const TagsComponent: React.FunctionComponent<TagsModel> = ({
  disableInput,
  inputRef,
  items,
  onClearTags,
  onDelete,
  onInput,
  onSaveEdit,
  onToggleSuggestions,
  readOnly,
  validationMessage,
  onInputStatusChanged,
}) => {
  return (
    <ul className="tags-wrapper">
      {items.map((item) => (
        <TagComponent
          {...item}
          key={item.id}
          onDelete={onDelete}
          onSaveEdit={onSaveEdit}
        />
      ))}
      {!disableInput && (
        <TagInputComponent
          onInput={onInput}
          inputRef={inputRef}
          onStatusChange={onInputStatusChanged}
        />
      )}
      {!readOnly && (
        <Toolbar
          onShowSuggestions={onToggleSuggestions}
          message={validationMessage}
          onClear={onClearTags}
          disableTrash={!items.length}
        />
      )}
    </ul>
  );
};

export { TagsComponent };
