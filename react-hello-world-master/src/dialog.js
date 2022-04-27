import React from 'react';
import { Navigate } from 'react-router-dom';
import ReactModal from 'react-modal';
import './dialog.css';
export class AuthFailedModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: true
      };
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      const modal = this.state.showModal;
        if (!modal) {
            return (
              <Navigate to={'/'}/>
            )
        }
      return (
        <div>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Authorization failed"
            >
            <h1>Auth failed</h1>
            <button onClick={this.handleCloseModal}>Move to login page</button>
          </ReactModal>
        </div>
      );
    }
  }