"use client";
import useSWR from "swr";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ query }) => {
  const { data: resultsObj = {}, error, isLoading } = useSWR(query, async () => {
    const response = await fetch(`/api/search?q=${ query }`);
    return await response.json();
  });

  return (
    <>
      {
        query &&
          <div className="search-results-container">
            <div>
              { isLoading && <span className="search-loading">Loading...</span> }
            </div>

            { error && <span>Error. Try again later please.</span> }

            {
              Object.keys(resultsObj).map(type => {
                return (
                  <div key={ type }>
                    <span className="search-title">{ type + "s" }</span>

                    <ul className="search-list">
                      {
                        ! resultsObj[type].length ?
                          <span className="search-no-results">No results found.</span>

                        :
                          resultsObj[type].map(result =>
                            <SearchResultItem
                              key={ result.id }
                              type={ type }
                              result={ result }
                            />
                          )
                      }
                    </ul>
                  </div>
                )
              })
            }
        </div>
      }
    </>
  );
}

export default SearchResults;
