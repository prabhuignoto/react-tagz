import type { RefObject } from "react";

export interface TagModel {
  name: string;
  value: string;
}

export interface DropTarget {
  src: string;
  dest: string;
}

interface DragModel {
  onDragEnded?: (id: string) => void;
  onDragStarted?: (id: string) => void;
}

export interface TagViewModel extends TagModel, DragModel {
  hide?: boolean;
  id?: string;
  onDelete?: (id: string) => void;
  onSaveEdit?: (id: string, newText: string) => void;
  order: number;
  readOnly?: boolean;
}

export enum Mode {
  INLINE,
  LIST_MODE,
}

export interface SuggestModel {
  selected: boolean;
  value: string;
}

export interface Props {
  allowDuplicates?: boolean;
  allowParsing?: {
    delimiter: string;
  };
  items: TagModel[];
  maxTags?: number;
  placeholder?: string;
  readOnly?: boolean;
  suggestionMode?: Mode;
  suggestions?: string[];
}

export interface SuggestionsModel {
  disableInput: boolean;
  exclude?: string[];
  items: string[];
  mode: Mode;
  onCloseSuggestion: () => void;
  onDelete: (value: string) => void;
  onSelection: (value: string) => void;
}

export interface TagsModel extends DragModel {
  disableInput?: boolean;
  inputRef: RefObject<HTMLElement>;
  items: TagViewModel[];
  onClearTags: () => void;
  onDelete?: (id: string) => void;
  onInput: (value: string) => void;
  onInputStatusChanged: (status: boolean) => void;
  onSaveEdit: (id: string, newText: string) => void;
  onToggleSuggestions: () => void;
  readOnly?: boolean;
  validationMessage?: string;
}

export interface ToolbarModel {
  disableTrash?: boolean;
  message?: string;
  onClear?: () => void;
  onShowSuggestions?: () => void;
}

export interface EditTextModel {
  cursorSize?: 'SMALL' | 'LARGE';
  mode: 'EDIT' | 'INPUT';
  onEditStatusChanged: (status: boolean) => void;
  onSaveEdit?: (value: string) => void;
  placeholder?: string;
  ref?: RefObject<HTMLElement>;
  showCursor?: boolean;
  value: string;
  editable?: boolean;
  maxLength?: number;
}

export interface BlinkCursorModel {
  cursorSize: 'SMALL' | 'LARGE';
  hasFocus?: boolean;
  order: number;
  selectAll?: boolean;
}

export interface PlaceholderModel {
  onBlr: () => void;
  onClick: () => void;
  value?: string;
}