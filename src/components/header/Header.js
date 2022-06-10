import styled from 'styled-components';
import { Hamburger } from './Hamburger';
import { mobile } from '../variables';

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
`;

const NavItem = styled.a`
  padding: 0 20px;
  color: ${props => props.theme.fontColor};
  font-size: 18px;
  font-weight: bold;

  @media ${mobile} {
    display: block;
    padding: 10px;
    margin: 0 20px;
    border-top: 2px solid ${props => props.theme.blueLight};
    text-align: center;
  }
`;

const Nav = styled.nav`
  @media ${mobile} {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.bgColor};
    opacity: 0;

    // 手機版遮幕
    label {
      display: block;
      width: 100%;
      height: 100vh; // TODO: 注意手機版
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

// html
const PageHeader = () => {
  return (
    <Header>
      <Hamburger />
      <Nav>
        {navList.map(item => (
          <NavItem key={item.name}>{item.name}</NavItem>
        ))}
        <label htmlFor="hamburger"></label>
      </Nav>
    </Header>
  );
};

export { PageHeader };
