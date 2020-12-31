import React from 'react';
import type { PlaceholderModel } from 'src/types';
import { Placeholder, PlaceholderWrapper } from './Placeholder.styles';

const PlaceholderComponent: React.FunctionComponent<PlaceholderModel> = (
  props,
) => {
  return (
    <PlaceholderWrapper onClick={props.onClick} onBlur={props.onBlr}>
      <Placeholder>{props.value}</Placeholder>
      {props.children}
    </PlaceholderWrapper>
  );
};

export { PlaceholderComponent };
