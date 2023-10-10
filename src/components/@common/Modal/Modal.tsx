'use client';

import {
  useCallback,
  useEffect,
  useRef,
  ComponentPropsWithoutRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  canBackdropClose?: boolean;
  canEscKeyClose?: boolean;
  hasCloseButton?: boolean;
  closeModal: () => void;
} & ComponentPropsWithoutRef<'dialog'>;

const Modal = ({
  isOpen = true,
  canBackdropClose = true,
  canEscKeyClose = true,
  hasCloseButton = true,
  closeModal,
  children,
  ...rest
}: Props) => {
  const myRef = useRef<HTMLDialogElement>(null);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const onKeyDownEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      console.log('1df');
      document.body.style.overflow = 'hidden';
      myRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && canEscKeyClose) {
      window.addEventListener('keydown', onKeyDownEscape);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDownEscape);
    };
  }, [isOpen, canEscKeyClose, onKeyDownEscape]);

  useEffect(() => {
    setPortalElement(document.getElementById('modal-portal'));
  }, []);

  if (!portalElement) return null;

  return createPortal(
    <div className={styles.wrapper}>
      {isOpen && (
        <>
          <div
            className={styles.backdrop}
            onClick={canBackdropClose ? closeModal : undefined}
          />
          <dialog
            className={styles.content}
            ref={myRef}
            aria-modal={isOpen}
            {...rest}
          >
            {hasCloseButton && (
              <button
                className={styles.close}
                type='button'
                onClick={closeModal}
                aria-label='모달 닫기'
              >
                <Image
                  src='./icons/close-rounded.svg'
                  width={24}
                  height={24}
                  alt=''
                />
              </button>
            )}
            {children}
          </dialog>
        </>
      )}
    </div>,
    portalElement
  );
};

export default Modal;
