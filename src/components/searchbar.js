import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/searchBar.module.css';

// Giphy
import GphApiClient from 'giphy-js-sdk-core'
let client = GphApiClient("GlVGYHkr3WSBnllca54iNt0yFbjz7L65")

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {

    /// Gif Search
    client.search('gifs', { "q": searchTerm })
      .then((response) => {
        setSearchResults(response.data);
        response.data.forEach((gifObject) => {
          console.log(gifObject)
        })
      })
      .catch((err) => {
        console.error(err)
      })

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <div>
        <ul>
          {searchResults.map((result) => (
            <li style={{position: 'relative'}}key={result.id}>{result.title}<Image fill={true} alt="" src={result.images.preview_gif.url}></Image></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
