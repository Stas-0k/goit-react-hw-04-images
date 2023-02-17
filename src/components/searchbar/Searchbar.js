import { useState } from 'react';
import css from './searchbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import propTypes from 'prop-types';

function Searchbar ({onSubmit})   {

  const [query, setQuery] = useState('')

  const handleChange = evt => {
    setQuery(evt.target.value)    
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === "") { 
      return alert("Please enter something.")
    }
    onSubmit(query);
  };

 
    return (
      <header className={css.Searchbar}>
        <form onSubmit={handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <IoSearchSharp size={30} />
            <span className={css.SearchForm_button_label}></span>
          </button>

          <input
            className={css.SearchForm_input}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
