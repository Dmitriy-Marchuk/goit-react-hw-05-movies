import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 5px;
  color: black;

  &.active {
    color: red;
  }
`;

const HeaderNav = () => {
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </nav>
  );
};

export default HeaderNav;
