import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './App.module.css';
import { fetchImages } from './Query/Query';
import { Searchbar } from './Searchbar/Searchbar';
import { imageMapper } from './imageMapper/imageMapper';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import  Modal  from './Modal/Modal';

class App extends Component {
  state = {
    response: [],
    page: 1,
    q: '',
    isLoading: false,
    isShown: false,
    isLoadMore: false,
    currentImage: null,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.getImage();
    }

 
  }

  getImage = () => {
    if (this.state.q !== '') {
      
      const { page, q } = this.state;
      this.setState({ isLoading: true });
      fetchImages(page, q)
        .then(({ data: { hits } }) => {
          hits.length >= 12
            ? this.setState({ isLoadMore: true })
            : this.setState({ isLoadMore: false });
          hits.length === 0 && Notify.failure('Image note found..');
          this.setState(prevState => ({
            response: [...prevState.response, ...imageMapper(hits)],
            isShown: true,

            error: '',
          }));
        })
        .catch(error => {
          this.setState({ error: error.message, isShown: false });
        })
        .finally(() => this.setState({ isLoading: false }));
    } else {
      Notify.info(' Please enter something .. ')
      this.setState({isLoadMore: false})
      return;
    }
  };
  submitHandler = event => {
    event.preventDefault();

    this.getImage();
    this.setState({ page: 1, response: [] });
  };

  inputHandler = ({ target: { value } }) => {
    this.setState({ q: value });
  };

  nextPageHandler = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = data => {
    this.setState({ currentImage: data });
  };

  
  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { isLoadMore, isShown, isLoading, currentImage } = this.state;
    return (
      <>
        <Searchbar
          submitHandler={this.submitHandler}
          onChange={this.inputHandler}
        />
        {isShown && (
          <ImageGallery data={this.state.response} openModal={this.openModal} />
        )}

        {isLoadMore && (
          <Button text="Load more" handler={this.nextPageHandler} />
        )}
        {currentImage !== null && <Modal closeModal={this.closeModal} data={currentImage} />}
        {/* <Modal data={currentImage} /> */}

        {isLoading && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#3f51b5"
            ariaLabel="ball-triangle-loading"
            wrapperClass={css.spiner}
            wrapperStyle=""
            visible={true}
          />
        )}
      </>
    );
  }
}

export default App;
