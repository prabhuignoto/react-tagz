import styled from "@emotion/styled";
import { Mode } from "../../types";

export const SuggestionsWrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
  left: 50%;
  margin-top: 1rem;
  position: absolute;
  top: calc(100%);
  transform: translateX(-50%);
  padding: 0.5rem;
  width: 100%;
`;

export const Suggestions = styled.ul<{ mode?: Mode }>`
  display: ${p => p.mode === Mode.INLINE ? "flex" : "column"};
  list-style: none;
  margin-top: 2rem;
  margin: 0;
  padding: 0;
  width: 100%;
  
  overflow-y: auto;
  max-height: 350px;
  min-height: 100px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #494949;    /* color of the scroll thumb */
    border-radius: 10px;       /* roundness of the scroll thumb */
  }
`;

export const Suggestion = styled.li<{ mode?: Mode, disable: boolean, selected: boolean }>`
  align-self: flex-start;
  background: ${p => p.selected ? "#f5f5f5" : ""};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  filter: ${p => p.disable ? "opacity(0.4) grayscale(90%)" : ""};
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  pointer-events: ${p => p.disable ? "none" : ""};
  text-align: ${p => p.mode === Mode.LIST_MODE ? "left" : "center"};
  user-select: none;
  ${p => p.mode === Mode.LIST_MODE ? "width: 98%" : ""};
  &:hover {
    background: rgba(248,222,126,1.0);
  }
`;

export const SuggestText = styled.span`
  font-size: 0.8rem;
`;

export const SuggestCheckIcon = styled.span`
  border-radius: 50%;
  height: 1rem;
  margin-left: auto;
  margin-right: 0.5rem;
  width: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled.button`
  align-items: center;
  background: #494949;
  border: 0;
  color: rgba(248,222,126,1.0);
  display: flex;
  height: 1.5rem;
  padding: 0;
  width: 1.5rem;
  margin-left: auto;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SuggestionHeader = styled.header`
  display: flex;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const StatusLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;