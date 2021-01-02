import React, { useMemo } from 'react';
import type { BlinkCursorModel } from 'src/types';
import './EditText.css';

const BlinkCursor: React.FunctionComponent<BlinkCursorModel> = ({
  hasFocus,
  order,
}) => {
  const blinkStyle = useMemo(
    () =>
      ({
        '--blink-visibility': hasFocus ? 'visibility' : 'hidden',
        '--blink-order': order
      } as React.CSSProperties),
    [hasFocus, order],
  );

  return <span className="blink" style={blinkStyle} />;
};

export { BlinkCursor };
