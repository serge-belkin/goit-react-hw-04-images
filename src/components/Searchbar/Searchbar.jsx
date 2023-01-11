import { PropTypes } from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.ButtonSearch}>
        <span className={css.ButtonLabel}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={css.Input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.protoTypes = {
  onSubmit: PropTypes.func,
};

