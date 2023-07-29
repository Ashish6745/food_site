import React from 'react'

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className='modalRight'>
            <p className='closeBtn font-bold text-lg' onClick={onClose}>
              X
            </p>
            <div className='content'>
              <p>Do you want to</p>
              <h1>Order Something</h1>
              <p>?</p>
            </div>
            <div className='btnContainer'>
              <button className='btnPrimary'>
                <span className='bold'>YES</span>, I love Noodles
              </button>
              <button className='btnOutline'>
                <span className='bold'>NO</span>, thanks
              </button>
            </div>
          </div>
        </div>
       
      </div>
    );
  };

  export default Modal;