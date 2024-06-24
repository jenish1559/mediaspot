'use client';
import React, { useState } from 'react';

const SearchBox = ({ className, page }) => {
  const [searchString, setSearchText] = useState('');

  if (page === 'landingPage') {
    return (
      <div className={'w-[100%] flex flex-row  '}>

        {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
        <div className="flex gap-3 w-full  rounded-lg">
          <input
            type="search"
            id="default-search"
            value={searchString}
            onChange={e => setSearchText(e.name)}
            className="p-4 w-full text-sm  text-gray-900  rounded-lg bg-gray-200  focus:bg-gray-500 focus:shadow-inner  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search Mockups, Logos..."
          />
          <button className="flex items-center justify-center rounded-lg shadow-xl hover:scale-105 transition-all bg-primary px-4 border-l-2">

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
  }
  else {
    return (
      <div className={className}>
        <form>
          {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
          <div className="flex gap-3  w-full  rounded-lg">
            <input
              type="search"
              id="default-search"
              value={searchString}
              onChange={e => setSearchText(e.name)}
              className="p-3 w-full text-sm  text-gray-900  rounded-lg bg-gray-200  focus:bg-gray-500 focus:shadow-inner  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search Mockups, Logos..."
            />
            <button className="flex items-center justify-center rounded-lg shadow-xl hover:scale-105 transition-all bg-primary px-3 border-l-2">

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
        </form>
      </div>
    );
  }
};

export default SearchBox;
