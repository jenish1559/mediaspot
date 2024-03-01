'use client';
import React, {useState} from 'react';

const SearchBox = ({className, page}) => {
  const [searchString, setSearchText] = useState ('');

  if (page === 'landing-page') {
    return (
      <div className={'w-96 flex flex-row  '}>

        {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
        <div className="flex justify-between w-full  rounded-lg">
          <input 
            type="search"
            id="default-search"
            value={searchString}
            onChange={e => setSearchText (e.name)}
            className="  p-4 w-4/5 text-sm  text-gray-900  rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search Mockups, Logos..."
          />
           <button className="flex items-center justify-center rounded-lg bg-primary px-4 border-l ">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-light"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

        </div>
        <div />

      </div>
    );
  } else {
    return (
      <div className={className}>
        <form>
          {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
          <div className="flex items-center p-1 rounded-lg bg-gray-50">

            <input
              type="search"
              id="default-search"
              value={searchString}
              onChange={e => setSearchText (e.name)}
              className="block w-100 p-4 text-sm text-gray-900  rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search Mockups, Logos..."
            />
            <button
              type="submit"
              className="ms-1 text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBox;
