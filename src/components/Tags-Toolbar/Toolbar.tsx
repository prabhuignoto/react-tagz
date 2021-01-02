import React, { useMemo } from 'react';
import type { ToolbarModel } from 'src/types';
import { ListIcon, TrashIcon } from '../icons';
import './Toolbar.css';

const Toolbar: React.FunctionComponent<ToolbarModel> = 
  ({ message, onClear, onShowSuggestions, disableTrash }) => {
    const trashIconStyle = useMemo(
      () =>
        disableTrash
          ? ({
              '--control-opacity': 0.5,
              '--pointer-events': 'none',
            } as React.CSSProperties)
          : {},
      [disableTrash],
    );

    return (
      <nav className="nav-bar-wrapper">
        <span className="nav-bar-message">{message}</span>
        <ul className="nav-bar-controls">
          <li
            onClick={onClear}
            className="nav-bar-control"
            style={trashIconStyle}
          >
            <TrashIcon />
          </li>
          <li onClick={onShowSuggestions} className="nav-bar-control">
            <ListIcon />
          </li>
        </ul>
      </nav>
    );
  };

export { Toolbar };
