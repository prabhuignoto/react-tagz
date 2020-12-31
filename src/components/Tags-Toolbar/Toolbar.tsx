import React from 'react';
import type { ToolbarModel } from 'src/types';
import { ListIcon, TrashIcon } from '../icons';
import {
  NavbarControl,
  NavbarControls,
  NavbarMessage,
  NavBarWrapper,
} from './Toolbar.styles';

const Toolbar: React.FunctionComponent<ToolbarModel> = React.memo(
  ({ message, onClear, onShowSuggestions, disableTrash }) => {
    return (
      <NavBarWrapper>
        <NavbarMessage>{message}</NavbarMessage>
        <NavbarControls>
          <NavbarControl onClick={onClear} disable={disableTrash ? 1 : 0}>
            <TrashIcon />
          </NavbarControl>
          <NavbarControl onClick={onShowSuggestions}>
            <ListIcon />
          </NavbarControl>
        </NavbarControls>
      </NavBarWrapper>
    );
  },
  (prev, next) =>
    prev.message === next.message && prev.disableTrash === next.disableTrash,
);

export { Toolbar };
