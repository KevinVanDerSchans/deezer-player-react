import NavLink from './NavLink';
import Image from "next/image";
import Link from 'next/link';
import Search from '../search/Search';

const Sidebar = () => {
  return (
    <header className="header" id="header">

      <div className="logoAndSearch">
        <Link href="/" className="logo">
          <Image src="/assets/svg/deezer-logo.svg" alt="Deezer logo" width={148} height={28} priority />
        </Link>

        <Search />
      </div>

      <div className="navigation">
        <div className='navbar'>
          <nav>
            <ul className='navbarList'>

              <li className='navbarLabel'>
                <NavLink slug=''>
                  <span className='navbarLabel'>Home</span>
                </NavLink>
              </li>

              <li className='navbarLabel'>
                <NavLink slug='discover'>
                  <span className='navbarDiscoverLabel'>Discover</span>
                </NavLink>
              </li>

              <li className='navbarLabel'>
                <NavLink slug='recents'>
                  <span className='navbarLabel'>Recents</span>
                </NavLink>
              </li>

              <li className='navbarLabel'>
                <NavLink slug='library'>
                  <span className='navbarLabel'>Library</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="userIconContainer">
          <Image src='/assets/svg/user-icon.svg' alt='User icon' className="userIcon" width={50} height={50} />
        </div>

      </div>
    </header>
  );
};

export default Sidebar;
