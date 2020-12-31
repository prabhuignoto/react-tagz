import React, { RefObject } from 'react';
import { EditTextComponent } from '../EditBox/EditText';
import { TagsInputWrapper } from './TagsInput.style';

interface ITagInputModel {
  onInput: (value: string) => void;
  inputRef: RefObject<HTMLDivElement>;
  onStatusChange: (status: boolean) => void;
}

const TagInputComponent: React.FunctionComponent<ITagInputModel> = ({
  onInput,
  inputRef,
  onStatusChange,
}) => {
  const handleCreate = (text: string) => {
    onInput(text);
  };

  return (
    <TagsInputWrapper>
      <EditTextComponent
        value={''}
        onSaveEdit={handleCreate}
        onEditStatusChanged={onStatusChange}
        showCursor
        ref={inputRef}
        mode="INPUT"
        editable
      />
    </TagsInputWrapper>
  );
};

export { TagInputComponent };
