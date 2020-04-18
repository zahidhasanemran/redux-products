import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MODAL_CLOSE } from './Redux/Action';

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
};

function Modal({isOpen, name, text, close}) {
    
    return (
        <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
            <div className="modal-container">
                <h4> {name} </h4>
                <p> {text} </p>
                <button onClick={close} className="btn btn-primary">Close</button>
            </div>
        </div>
    );
}

function mapStateProps({modalState: {isOpen, name, text}}) {
    return {isOpen, name, text}
}

function mapReducerProps(dispatch) {
    return{close: ()=> dispatch({type: MODAL_CLOSE})}
}

export default connect(mapStateProps, mapReducerProps)(Modal);