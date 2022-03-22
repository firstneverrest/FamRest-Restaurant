import { h, FunctionComponent } from 'preact';
import { Link } from 'preact-router/match';

const Navbar: FunctionComponent = () => {
  return (
    <nav class="navbar-container">
      <Link class="nav-text" href="/">
        Home
      </Link>
      <Link class="nav-text" href="/menu">
        Menu
      </Link>
      <Link class="nav-text" href="/about">
        About
      </Link>
      <Link class="nav-text" href="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
