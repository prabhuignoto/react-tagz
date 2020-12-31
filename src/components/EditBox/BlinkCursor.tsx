import React from 'react';
import type { BlinkCursorModel } from 'src/types';
import { Blink } from './EditText.styles';

const BlinkCursor: React.FunctionComponent<BlinkCursorModel> = ({
  hasFocus,
  cursorSize,
  selectAll,
  order,
}) => (
  <Blink
    visible={hasFocus ? 1 : 0}
    size={cursorSize}
    selectAll={selectAll ? 1 : 0}
    style={{ order }}
  />
);

export { BlinkCursor };
