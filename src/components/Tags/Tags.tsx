import React from 'react';
import type { TagsModel } from '../../types';
import { Toolbar } from '../Tags-Toolbar/Toolbar';
import { TagComponent } from './Tag';
import { TagsWrapper } from './Tags.style';
import { TagInputComponent } from './TagsInput';

const TagsComponent: React.FunctionComponent<TagsModel> = ({
  disableInput,
  inputRef,
  items,
  onClearTags,
  onDelete,
  onDragEnded,
  onDragStarted,
  onInput,
  onSaveEdit,
  onToggleSuggestions,
  readOnly,
  validationMessage,
  onInputStatusChanged,
}) => {
  return (
    <TagsWrapper>
      {items.map((item) => (
        <TagComponent
          {...item}
          key={item.id}
          onDelete={onDelete}
          onDragEnded={onDragEnded}
          onDragStarted={onDragStarted}
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
    </TagsWrapper>
  );
};

export { TagsComponent };
