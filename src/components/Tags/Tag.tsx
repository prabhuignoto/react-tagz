import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { TagViewModel } from '../../types';
import { EditTextComponent } from '../EditBox/EditText';
import { CloseIcon } from '../icons';
import './Tag.css';

const TagComponent: React.FunctionComponent<TagViewModel> = ({
  name,
  id,
  onDelete,
  readOnly,
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

    if (status) {
      tagRef.current && tagRef.current.focus();
    } else {
      tagRef.current && tagRef.current.blur();
    }
  }, []);

  const tagRef = useRef<HTMLDivElement>(null);

  const style = useMemo(
    () =>
      ({
        '--tag-bg-color': isTagEdited ? '#FFF' : 'rgba(248,222,126,1.0)',
        '--tag-border-color': isTagEdited ? '#494949' : 'transparent',
      } as React.CSSProperties),
    [isTagEdited],
  );

  return (
    <li className="tag" style={style} tabIndex={0}>
      <div>
        <EditTextComponent
          value={name}
          onSaveEdit={onSave}
          onEditStatusChanged={onEditStatusChanged}
          ref={tagRef}
          mode="EDIT"
          editable={!readOnly}
        />
      </div>
      {!readOnly && (
        <span
          onClick={() => id && onDelete && onDelete(id)}
          tabIndex={0}
          className="close-icon-wrapper"
        >
          <CloseIcon />
        </span>
      )}
    </li>
  );
};

export { TagComponent };
