import NavLink from './NavLink';
import Image from "next/image";
import Link from 'next/link';
import Search from '../search/Search';

const Sidebar = () => {
  return (
    <header className="header" id="header">

      <div className="logo-and-search">
        <Link href="/" className="logo">
          <Image
            className='logo'
            src="/assets/svg/deezer-logo.svg"
            alt="Deezer logo"
            width={148}
            height={28}
            priority
          />
        </Link>

        <Search />
      </div>

      <div className="navigation">
        <div className='navbar'>
          <nav>
            <ul className='navbar-list'>

              <li className='navbar-label'>
                <NavLink slug=''>
                  <span className='navbar-label'>Home</span>
                </NavLink>
              </li>

              <li className='navbar-label'>
                <NavLink slug='discover'>
                  <span className='navbar-discover-label'>Discover</span>
                </NavLink>
              </li>

              <li className='navbar-label'>
                <NavLink slug='recents'>
                  <span className='navbar-label'>Recents</span>
                </NavLink>
              </li>

              <li className='navbar-label'>
                <NavLink slug='library'>
                  <span className='navbar-label'>Library</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user-icon-container">
          <Image src='/assets/svg/user-icon.svg' alt='User icon' width={50} height={50} />
        </div>

      </div>
    </header>
  );
};

export default Sidebar;
