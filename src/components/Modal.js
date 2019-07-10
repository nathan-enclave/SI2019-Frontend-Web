import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 50,
      zIndex : 100
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      width: '80%',
      maxWidth: 800,
      maxHeight: 600,
      height: '80%',
      margin: '0 auto',
      padding: 30,
      top: '50%',
      transform: 'translateY(-50%)',
      animation: 'modal-animation ease-out 1.5s'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal custom-modal-animation" style={modalStyle}>
        <button onClick={this.props.onClose}  className="btn btn-outline btn-sm red" style={{float: 'right',margin:'10px'}}>
             X
            </button>
          {this.props.children}

          <div className="footer">        
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
