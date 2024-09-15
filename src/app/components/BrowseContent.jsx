"use client";

import React, { useState } from 'react';
import axios from 'axios';

const BrowseContent = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contentList, setContentList] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form submission default behavior
    console.log('Searching for:', searchTerm); // Log search term to debug

    try {
      const response = await axios.post(
        'https://graphql.anilist.co',
        {
          query: `
            query ($search: String) {
              Page(page: 1, perPage: 10) {
                media(search: $search, type: ${type}) {
                  id
                  title {
                    romaji
                    english
                  }
                  coverImage {
                    large
                  }
                }
              }
            }
          `,
          variables: { search: searchTerm },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ANILIST_API_TOKEN}`, // Ensure the correct environment variable
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      console.log('Response:', response.data); // Log response to debug
      setContentList(response.data.data.Page.media);
    } catch (error) {
      console.error('Error fetching data:', error);

      // Log detailed error response from the API
      if (error.response) {
        console.error('Error response data:', error.response.data);
      } else {
        console.error('No response data from API');
      }
    }
  };

  return (
    <>
      <form className="w-full p-6 relative text-black" onSubmit={handleSearch}>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder={`Search ${type === 'ANIME' ? 'Anime' : 'Manga'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 bg-black border border-gray-500 hover:border-gray-400 placeholder-gray-400 text-gray-200 rounded-full hover:bg-gray-900 hover:text-gray-100 transition-colors duration-300"
          />
          <button
            type="submit"
            className="p-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </form>

      {contentList.length > 0 && (
        <div className="mx-auto max-w-4xl p-6">
          <div className="flex flex-wrap justify-center gap-6">
            {contentList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md w-full">
                  <img
                    src={item.coverImage.large}
                    alt={item.title.romaji}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <a
                  href="#"
                  className="mt-2 text-center text-base font-normal text-gray-700 transition-colors duration-300 hover:text-purple-500"
                >
                  {item.title.english || item.title.romaji}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BrowseContent;


