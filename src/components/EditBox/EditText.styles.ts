import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface BlinkStyleModel {
  position?: string;
  selectAll?: number;
  size: "SMALL" | "LARGE";
  visible?: number;
}

export const EditTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  padding-left: 0.2rem;
`;

const animateBlink = keyframes`
  from, to {
    background: #000;
  }
  50% {
    background: transparent;
  }
`;

export const EditText = styled.span<{ selectAll?: boolean }>`
  background: ${p => p.selectAll ? "#ccc" : "transparent"};
  color: ${p => p.selectAll ? "#000" : ""};
  user-select: none;
  align-items: center;
  display: flex;
  min-width: 5px;
  font-size: 0.85rem;
  order: 1;
  min-width: 4px;
  padding: 0.2rem;
`;

export const Blink = styled.span<BlinkStyleModel>`
  animation: ${animateBlink};
  align-items: center;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
  display: flex;
  order: ${p => p.position === "front" ? 1 : 2};
  visibility: ${p => p.visible ? "visibility" : "hidden"};
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  justify-content: flex-start;
  width: 1px;
  height: 18px;
  margin-left: 1px;
`;

export const Char = styled.span<{ position?: string }>`
  order: ${p => p.position === "front" ? 2 : 1};
`;

export const CharWrapper = styled.span`
  align-items: center;
  display: flex;
`;