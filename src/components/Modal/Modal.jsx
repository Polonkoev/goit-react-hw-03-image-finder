import css from '../Modal/Modal.module.css';

import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    // const { currentImage } = this.props.data;

    return (
      <div onClick={()=>this.props.closeModal()} className={css.Overlay}>
        <div className={css.Modal}>
          <img className={css.Modal} src={this.props.data} alt="largeURL" />
        </div>
      </div>
    );
  }
}

export default Modal;

    // export const Modal = (currentImage)=> {
    //     return (<div className={css.Overlay}>
    //   <div className={css.Modal}>
    //     <img className={css.Modal} src={currentImage} alt="largeURL" />
    //   </div>
    // </div>)
    // }