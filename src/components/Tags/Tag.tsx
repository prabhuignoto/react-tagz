import React, { useCallback, useRef, useState } from 'react';
import type { TagViewModel } from '../../types';
import { CloseIcon } from '../icons';
import { EditTextComponent } from '../EditBox/EditText';
import { CloseIconWrapper, Tag, TagContentWrapper } from './Tag.style';

const TagComponent: React.FunctionComponent<TagViewModel> = ({
  name,
  id,
  onDelete,
  readOnly,
  onDragEnded,
  onDragStarted,
  hide,
  onSaveEdit,
}) => {
  const onSave = useCallback((val: string) => {
    if (id && onSaveEdit) {
      onSaveEdit(id, val);
    }
  }, []);

  const [isTagEdited, setIsTagEdited] = useState(false);

  const onEditStatusChanged = useCallback((status: boolean) => {
    setIsTagEdited(status);

    if(status) {
      tagRef.current && tagRef.current.focus();
    } else {
      tagRef.current && tagRef.current.blur();
    }
  }, []);

  const tagRef = useRef<HTMLDivElement>(null);

  return (
    <Tag tabIndex={0} hasFocus={isTagEdited ? 1 : 0}>
      <TagContentWrapper>
        <EditTextComponent
          value={name}
          onSaveEdit={onSave}
          onEditStatusChanged={onEditStatusChanged}
          ref={tagRef}
          mode="EDIT"
          editable={!readOnly}
        />
      </TagContentWrapper>
      {!readOnly && (
        <CloseIconWrapper
          onClick={() => id && onDelete && onDelete(id)}
          tabIndex={0}
        >
          <CloseIcon />
        </CloseIconWrapper>
      )}
    </Tag>
  );
};

export { TagComponent };
