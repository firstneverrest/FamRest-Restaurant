import { h, FunctionComponent } from 'preact';

const Navbar: FunctionComponent = () => {
  return (
    <nav class="navbar-container">
      <a class="nav-text">Home</a>
      <a class="nav-text">Menu</a>
      <a class="nav-text">About</a>
      <a class="nav-text">Contact</a>
    </nav>
  );
};

export default Navbar;
