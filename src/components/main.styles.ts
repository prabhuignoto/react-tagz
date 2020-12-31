import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 600px;
`;