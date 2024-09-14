

"use client";

import React, { useState } from 'react';
import axios from 'axios';

const BrowseContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animeList, setAnimeList] = useState([]);

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
                media(search: $search, type: ANIME) {
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
      setAnimeList(response.data.data.Page.media);
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
            placeholder="Search Anime"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 bg-black  border border-gray-500 hover:border-gray-400 placeholder-gray-400 text-gray-200 rounded-full hover:bg-gray-900 hover:text-gray-100 transition-colors duration-300"
            />
            <button
            type="submit"
            className="p-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300"
            >
            Search
            </button>
        </div>
    </form>



      {animeList.length > 0 && (
        <ul>
          {animeList.map((anime) => (
            <li key={anime.id}>
              <h3>{anime.title.english || anime.title.romaji}</h3>
              <img src={anime.coverImage.large} alt={anime.title.romaji} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BrowseContent;

