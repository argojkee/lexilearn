import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GeneralModalStyles } from './GeneralModalStyles.styled';
import React from 'react';
import { CircleX } from 'lucide-react';

const modalRoot = document.getElementById('modal-backdrop');

const GeneralModal = ({ children, toggleModal }) => {
  useEffect(() => {
    const onEsc = e => {
      if (e.code !== 'Escape') return;
      toggleModal(false);
    };
    window.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.style.paddingRight = paddingOffSet;

    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 0;
    };
  }, [toggleModal]);

  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    toggleModal(false);
  };

  const childrenWithToggle = React.isValidElement(children)
    ? React.cloneElement(children, { toggleModal })
    : children;

  return createPortal(
    <GeneralModalStyles onClick={onBackdrop}>
      <div className="modal">
        <button
          type="button"
          className="exit-btn"
          onClick={() => toggleModal(false)}
        >
          <CircleX size={24} />
        </button>
        {childrenWithToggle}
      </div>
    </GeneralModalStyles>,
    modalRoot
  );
};

export default GeneralModal;
