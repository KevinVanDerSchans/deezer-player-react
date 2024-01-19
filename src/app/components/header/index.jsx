'use client';
import Link from "next/link";
import Image from "next/image";
import Navbar from "../navbar/navbar"

const Header = () => {
  return (
    <header className="header" id="header">

      <div className="logoAndSearch">
        <Link href="/" className="logo">
          <Image src="/assets/svg/deezer-logo.svg" alt="Deezer logo" width={160} height={40} priority />
        </Link>

        <div className="searcher">
          <form>
            <label className="searchLabel">
              <div className="lensContainer">
                <Image src='/assets/svg/lens.svg' alt='Lens for song search' className="lens" width={20} height={20} />
              </div>
              <input
                type="text"
                placeholder="Search artists"
                title='Write your favorite artist'
                className="searchInput"
            />
            </label>
          </form>
        </div>
      </div>

      <div className="navigation">
        <Navbar />

        <div className="userIconContainer">
          <Image src='/assets/svg/user-icon.svg' alt='User icon' className="userIcon" width={50} height={50} />
        </div>
      </div>

    </header>
  )
}

export default Header;