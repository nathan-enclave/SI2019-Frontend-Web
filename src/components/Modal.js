import React from 'react';

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
      maxWidth: 1000,
      minHeight: 500,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <button onClick={this.props.onClose}  className="btn btn-outline btn-circle red btn-sm red" style={{float: 'right',margin:'10px'}}>
             X
            </button>

          {this.props.children}
          <div className="row">
            <div className="footer">
            <a onClick={this.props.onClose}  className="btn green" style={{left:'450px',margin:'10px'}}>
              {this.props.endForm}
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Modal;
