'use client';
import Image from "next/image";
import { useState } from 'react';
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
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
            value={ searchQuery }
            onChange={ (e) => setSearchQuery(e.target.value) }
          />

          <SearchResults query={ searchQuery }/>
        </label>
      </form>
    </div>
  )
}

export default Search;
