import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { EditTextModel } from 'src/types';
import { BlinkCursor } from './BlinkCursor';
import {
  Char,
  CharWrapper,
  EditText,
  EditTextWrapper,
} from './EditText.styles';
import { PlaceholderComponent } from './Placeholder';

const EditTextComponent = React.forwardRef<HTMLDivElement, EditTextModel>(
  (
    {
      value,
      onSaveEdit,
      cursorSize = 'SMALL',
      onEditStatusChanged,
      placeholder = 'Enter a value...',
      mode,
      editable = false,
      maxLength = 20,
    },
    ref,
  ) => {
    const [editText, setEditText] = useState(value);
    const [selectAll, setSelectAll] = useState(false);
    const [hasFocus, setHasFocus] = useState<boolean>();

    const onSetFocus = useCallback(() => {
      if (!hasFocus && editable) {
        setHasFocus(true);
      }
    }, [hasFocus]);

    const onRemFocus = useCallback(() => {
      setHasFocus(false);
    }, [selectAll, editText]);

    // const editTextRef = useRef<HTMLSpanElement>(null);
    const [cursorPosition, setCursorPosition] = useState(value.length - 1);

    const cursorIsAtEnd = useRef(true);
    const cursorIsAtStart = useRef(false);

    const handleKeyInput = useCallback(
      (event: React.KeyboardEvent) => {
        const evtKey = event.key;
        const editTextLen = editText.length;

        if (event.ctrlKey && evtKey === 'a') {
          setSelectAll(true);
          return;
        }

        if (evtKey.length === 1 && editTextLen < maxLength) {
          if (selectAll) {
            setEditText('');
            selectAll && setSelectAll(false);
          }

          const val = evtKey === ' ' ? String.fromCharCode(160) : evtKey;

          if (cursorIsAtEnd.current) {
            setEditText((prev) => `${prev}${val}`);
          } else {
            setEditText((prev) => {
              const copy = [...prev];
              copy.splice(cursorPosition + 1, 0, val);
              return copy.join('');
            });
            setCursorPosition(cursorPosition + 1);
          }

          return;
        }

        switch (evtKey) {
          case 'Enter':
            if (editText) {
              onSaveEdit && onSaveEdit(editText.trim());
              onEditStatusChanged(false);

              if (mode === 'INPUT') {
                setEditText('');
              }
            }
            break;
          case 'Escape':
            setHasFocus(false);
            selectAll && setSelectAll(false);
            onEditStatusChanged(false);
            break;
          case 'Backspace':
            if (selectAll) {
              setEditText('');
            } else {
              setEditText((prev) =>
                [...prev]
                  .filter((_, index) => index !== cursorPosition)
                  .join(''),
              );

              if (cursorPosition >= 0) {
                setCursorPosition(cursorPosition - 1);
              }
            }
            break;
          case 'Home':
          case 'End':
            evtKey === 'Home'
              ? setCursorPosition(-1)
              : setCursorPosition(editTextLen - 1);

            cursorIsAtEnd.current = evtKey === 'Home';
            cursorIsAtStart.current = evtKey === 'Home';

            selectAll && setSelectAll(false);
            break;
          case 'ArrowLeft':
          case 'ArrowRight':
            if (evtKey === 'ArrowLeft' && cursorPosition >= 0) {
              setCursorPosition(cursorPosition - 1);
            } else if (
              evtKey === 'ArrowRight' &&
              cursorPosition < editTextLen - 1
            ) {
              setCursorPosition(cursorPosition + 1);
            }

            if (cursorPosition > 0 && cursorPosition < editTextLen) {
              cursorIsAtStart.current = false;
              cursorIsAtEnd.current = false;
            } else {
              cursorIsAtStart.current = true;
              cursorIsAtEnd.current = false;
            }

            selectAll && setSelectAll(false);
            break;
          case 'Delete':
            if (selectAll) {
              setEditText('');
            } else if (editTextLen && cursorPosition < editTextLen) {
              setEditText((prev) =>
                [...prev]
                  .filter((_, index) => index !== cursorPosition + 1)
                  .join(''),
              );
            }
            break;
        }
      },
      [editText, hasFocus, selectAll, cursorPosition],
    );

    useEffect(() => {
      if (hasFocus === null || hasFocus === undefined) {
        return;
      }

      if (hasFocus) {
        onEditStatusChanged(true);
      } else {
        onEditStatusChanged(false);

        setSelectAll(false);
        setCursorPosition(editText.length - 1);
      }
    }, [hasFocus]);

    useEffect(() => {
      if (!editText.length) {
        setSelectAll(false);
        setCursorPosition(-1);
      } else {
        if (cursorIsAtEnd.current) {
          setCursorPosition(editText.length - 1);
        }
      }
    }, [editText]);

    const blinkPosition = useMemo(() => {
      if (cursorPosition < 0) {
        return 'front';
      } else if (cursorPosition === editText.length) {
        return 'back';
      } else {
        return `back`;
      }
    }, [cursorPosition, editText]);

    const Blink = useMemo(
      () =>
        cursorPosition < 0 || hasFocus ? (
          <BlinkCursor
            hasFocus={hasFocus}
            selectAll={selectAll}
            cursorSize={cursorSize}
            order={0}
          />
        ) : null,
      [hasFocus, selectAll, cursorPosition, editText],
    );

    const TextView = (
      <EditTextWrapper
        onBlur={onRemFocus}
        onKeyDown={handleKeyInput}
        tabIndex={0}
        onFocus={onSetFocus}
        ref={ref}
      >
        {mode === 'INPUT' && !editText.length && (
          <PlaceholderComponent
            value={placeholder}
            onClick={onSetFocus}
            onBlr={onRemFocus}
          />
        )}
        <EditText selectAll={selectAll}>
          {cursorPosition < 0 && Blink}
          {[...editText].map((char, index) => (
            <CharWrapper key={index}>
              <Char position={blinkPosition}>{char}</Char>
              {index === cursorPosition && (
                <BlinkCursor
                  hasFocus={hasFocus}
                  selectAll={selectAll}
                  cursorSize={cursorSize}
                  order={index + 1}
                />
              )}
            </CharWrapper>
          ))}
        </EditText>
      </EditTextWrapper>
    );

    return TextView;
  },
);

export { EditTextComponent };
