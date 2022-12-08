import { Component } from 'react';
import { Notify } from 'notiflix';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    q: '',
  };

  inputHandler = ({ target: { value } }) => {
    this.setState({ q: value });
  };
  submitHandler = event => {
    event.preventDefault();
    if (this.state.q === '') {
      Notify.info(' Please enter something .. ');
    }
    this.props.submitHandler(this.state.q);
    this.setState({ q: '' })
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.submitHandler} className={css.SearchForm}>
          <button className={css.SearchForm_button} type="submit">
            <span>Search</span>
          </button>
          <input
            value={this.state.q}
            name="name"
            onChange={this.inputHandler}
            className={css.SearchForm_input}
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

export default Searchbar;
