import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const TagContentWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Tag = styled.li<{ hide?: number; hasFocus?: number }>`
  align-items: center;
  background: ${p => p.hasFocus ? "#fff" : "rgba(248,222,126,1.0)"};
  border-radius: 4px;
  border: ${p => p.hasFocus ? "1px solid #494949" : "1px solid transparent"};
  display: flex;
  font-size: 1rem;
  margin: 0.25rem 0.25rem;
  outline: 0;
  padding: 0.25rem;
`;

export const CloseIconWrapper = styled.span`
  align-items: center;
  background: #494949;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 1rem;
  justify-content: center;
  margin-left: auto;
  margin-right: 0.25rem;
  width: 1rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const animateBlink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
`;

export const EditText = styled.span<{selectAll?: boolean}>`
  background: ${p => p.selectAll ? "blue" : ""};
  color: ${p => p.selectAll ? "#fff" : ""};
  user-select: none;
`;

export const Blink = styled.span<{ visible?: number }>`
  animation: ${animateBlink};
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
  display: block;
  visibility: ${p => p.visible ? "visibility" : "hidden"};
`;
