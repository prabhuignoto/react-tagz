import styled from "@emotion/styled";

export const NavBarWrapper = styled.nav`
  padding: 0.2rem 0;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const NavbarControls = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  margin-left: auto;
  padding: 0;
  width: 30%;
  justify-content: flex-end;
`;

export const NavbarItem = styled.li``;

export const NavbarControl = styled.button<{disable?: number}>`
  background: none;
  border: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${p => {
    if(p.disable) {
      return `
        filter: opacity(0.5);
        pointer-events: none;
      `;
    }
  }}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NavbarMessage = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 500;
  max-width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;