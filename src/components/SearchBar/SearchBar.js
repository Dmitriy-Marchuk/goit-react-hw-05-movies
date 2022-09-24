import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './_searchBar.scss';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error(`Wrong request! Write something!`);
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          onChange={handleInput}
          value={query}
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        ></input>
        <button className="searchButton" type="submit">
          <BsSearch size={18} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
