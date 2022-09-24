import { NavItem } from '../App.styled';
import './_appBar.scss';

const AppBar = () => {
  return (
    <header className="headerNavPanel">
      <nav className="navigation">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </nav>
    </header>
  );
};

export default AppBar;
