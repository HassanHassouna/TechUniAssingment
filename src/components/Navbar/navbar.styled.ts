import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  height: 205px;
  padding: 0 5rem;
  font-family: "DM Sans ", sans-serif;
  @media screen and (max-width: 768px) {
    height: 100px;
    padding: 0 1rem;
  }
`

export const NavbarSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavbarLogo = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NavbarSocmed = styled.div`
  display: flex;
  align-items: center;
`

export const NavbarSocmedIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 16px;
  font-weight: 500;
`

export const NavbarCallCenter = styled.div`
  display: flex;
  align-items: center;
`

export const NavbarCallCenterIcon = styled.div`
  display: flex;
  align-items: center;
  width: 40px;

`

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
`

export const NavbarMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 2rem;
`

export const NavbarMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    cursor: pointer;
    z-index: 40;
  }
`;

export const NavbarMenuListMobile = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 30;
  transition: all 0.5s ease-in-out;
  transform: ${({isOpen}) =>
          isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarMenuListItemMobile = styled.li`
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  cursor: pointer;
`
