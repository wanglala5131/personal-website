import { forwardRef } from 'react';
import styled from 'styled-components';
import { tablets } from 'components/variables';

const HamburgerContainer = styled.label`
  display: none;

  @media ${tablets} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    cursor: pointer;
  }
`;

const HamburgerLine = styled.span`
  position: relative;
  display: inline-block;
  height: 3px;
  width: 22px;
  background-color: ${props => props.theme.primary};
  border-radius: 10px;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 3px;
    width: 22px;
    background-color: ${props => props.theme.primary};
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

    @media ${tablets} {
      & ~ .nav-wrapper {
        nav ul {
          transform: scaleY(1);
          transition: all 0.2s ease-in-out;
        }

        label {
          display: block;
        }
      }
    }
  }
`;

export const Hamburger = forwardRef((props, ref) => {
  return (
    <>
      <HamburgerCheckbox ref={ref} id="hamburger" />
      <HamburgerContainer htmlFor="hamburger">
        <HamburgerLine />
      </HamburgerContainer>
    </>
  );
});
Hamburger.displayName = 'Hamburger';
