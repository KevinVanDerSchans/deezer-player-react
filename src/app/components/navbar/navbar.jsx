import NavbarLink from './navbar.link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul className='navbarList'>
          <li className='navbarLabel'>
            <NavbarLink slug=''>
              <span className='navbarLabel'>Home</span>
            </NavbarLink>
          </li>

          <li className='navbarLabel'>
            <NavbarLink slug='discover'>
              <span className='navbarLabel'>Discover</span>
            </NavbarLink>
          </li>

          <li className='navbarLabel'>
            <NavbarLink slug='recents'>
              <span className='navbarLabel'>Recents</span>
            </NavbarLink>
          </li>

          <li className='navbarLabel'>
            <NavbarLink slug='library'>
              <span className='navbarLabel'>Library</span>
            </NavbarLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
