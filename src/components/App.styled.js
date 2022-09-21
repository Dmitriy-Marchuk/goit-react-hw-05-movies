import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0 50px;
  color: black;
  font-size: 30px;
  font-weight: 900;
  margin: 5px;

  &.active {
    color: orangered;
  }
`;
