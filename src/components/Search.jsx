import React, { useState } from 'react';
import useStore from '../store';

const Search = () => {
  const { setWord, setDefinitions } = useStore();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
      const data = await response.json();
      
      setTimeout(() => {
        setDefinitions(data);
        setWord(inputValue);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setDefinitions([]);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </div>
  );
};

export default Search;
