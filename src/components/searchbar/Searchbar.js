import { Component } from 'react';
import css from './searchbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import propTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === "") { 
      return alert("Please enter something.")
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <IoSearchSharp size={30} />
            <span className={css.SearchForm_button_label}></span>
          </button>

          <input
            className={css.SearchForm_input}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
