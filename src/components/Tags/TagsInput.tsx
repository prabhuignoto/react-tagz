import React, { RefObject } from 'react';
import { EditTextComponent } from '../EditBox/EditText';
import "./TagsInput.css";

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
    <div className="tags-input-wrapper">
      <EditTextComponent
        value={''}
        onSaveEdit={handleCreate}
        onEditStatusChanged={onStatusChange}
        showCursor
        ref={inputRef}
        mode="INPUT"
        editable
      />
    </div>
  );
};

export { TagInputComponent };
