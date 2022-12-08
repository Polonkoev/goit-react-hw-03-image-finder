import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = ({ submitHandler, onChange }) => {
  return (
    <header className={css.Searchbar}>
      <form onSubmit={submitHandler} className={css.SearchForm}>
        <button className={css.SearchForm_button} type="submit">
          <span>Search</span>
        </button>

        <input
          name="name"
          onChange={onChange}
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
