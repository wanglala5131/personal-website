import styled from 'styled-components';
import { mobile } from '../variables';

const HamburgerContainer = styled.label`
  display: none;

  @media ${mobile} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HamburgerLine = styled.span`
  position: relative;
  display: inline-block;
  height: 3px;
  width: 22px;
  background-color: ${props => props.theme.fontColor};
  border-radius: 10px;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 3px;
    width: 22px;
    background-color: ${props => props.theme.fontColor};
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }

  &::after {
    top: -8px;
  }

  &::before {
    bottom: -8px;
  }
`;

const HamburgerCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  &:checked {
    & ~ label span {
      background-color: transparent;

      &::after {
        width: 27px;
        transform: rotate(45deg) translate(1px, 10px);
      }

      &::before {
        width: 27px;
        transform: rotate(-45deg) translate(1px, -10px);
      }
    }

    & ~ nav {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const Hamburger = () => {
  return (
    <>
      <HamburgerCheckbox id="hamburger" />
      <HamburgerContainer htmlFor="hamburger">
        <HamburgerLine />
      </HamburgerContainer>
    </>
  );
};
