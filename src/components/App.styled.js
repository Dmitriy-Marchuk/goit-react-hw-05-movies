import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 10px 50px;
  margin-right: 10px;
  color: black;
  font-size: 30px;
  font-weight: 900;

  &.active {
    color: orangered;
  }
`;
