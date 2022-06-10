import styled from 'styled-components';
import { Hamburger } from './Hamburger';
import { ipad } from '../variables';

// data
const navList = [
  { name: 'About Me', link: '#about' },
  { name: 'Skill', link: '#skill' },
  { name: 'Experience', link: '#experience' },
  { name: 'Works', link: '#works' },
];

// css
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const NavWrapper = styled.div`
  @media ${ipad} {
    // 手機版遮幕
    label {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh; // TODO: 注意手機版
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  z-index: 2;

  @media ${ipad} {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 20px;
    background-color: ${props => props.theme.bgColor};
    transform-origin: top;
    transform: scaleY(0);
  }
`;

const NavItem = styled.li`
  a {
    display: block;
    position: relative;
    margin: 0 30px;
    color: ${props => props.theme.darkBlue};
    font-size: 18px;
    font-weight: bold;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.blue};
      transition: all 0.2s ease-in-out;
    }
  }

  @media (hover: hover) {
    a:hover::after {
      width: 100%;

      @media ${ipad} {
        width: 0;
      }
    }
  }

  @media ${ipad} {
    display: block;
    background-color: ${props => props.theme.bgColor};
    border-top: 2px solid ${props => props.theme.blue};
    text-align: center;

    &:first-child {
      padding-top: 30px;
    }

    a {
      padding: 10px;
      color: ${props => props.theme.fontColor};
    }
  }
`;

// html
const PageHeader = () => {
  return (
    <Header>
      <Hamburger />
      <NavWrapper className="nav-wrapper">
        <Nav>
          {navList.map(item => (
            <NavItem key={item.name}>
              <a href={item.link}>{item.name}</a>
            </NavItem>
          ))}
        </Nav>
        <label htmlFor="hamburger"></label>
      </NavWrapper>
    </Header>
  );
};

export { PageHeader };
