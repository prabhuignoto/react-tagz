import React from 'react';
import type { PlaceholderModel } from 'src/types';
import "./Placeholder.css";

const PlaceholderComponent: React.FunctionComponent<PlaceholderModel> = (
  props,
) => {
  return (
    <div onClick={props.onClick} onBlur={props.onBlr} className="placeholder-wrapper">
      <span className="placeholder">{props.value}</span>
      {props.children}
    </div>
  );
};

export { PlaceholderComponent };
