'use client';
import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CloseButton, ModalBox, ModalContent } from './Modal.style';

interface ModalProps extends PropsWithChildren {
	isOpen: boolean;
	closeModal: () => void;
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
	const root = document.getElementById('modal-root') ?? document.body;
	const modalRef = useRef<HTMLDialogElement>(null);

	const keyDownHandler = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		},
		[closeModal]
	);

	const closeOnBackdropClick = useCallback(
		(event: MouseEvent) => {
			if (!modalRef.current) return;

			const dialog = modalRef.current.getBoundingClientRect();
			const isClickInsideDialog =
				dialog.top <= event.clientY &&
				event.clientY <= dialog.top + dialog.height &&
				dialog.left <= event.clientX &&
				event.clientX <= dialog.left + dialog.width;

			if (!isClickInsideDialog) closeModal();
		},
		[closeModal]
	);

	useEffect(() => {
		const dialog = modalRef.current;

		if (isOpen) {
			dialog?.showModal();
			dialog?.addEventListener('click', closeOnBackdropClick);
			window.addEventListener('keydown', keyDownHandler);

			document.body.style.position = 'fixed';
			document.body.style.overflowY = 'hidden';
			return;
		}
		if (!isOpen) {
			document.body.style.position = 'relative';
			document.body.style.overflowY = 'auto';
			return;
		}

		return () => {
			dialog?.close();
			dialog?.removeEventListener('click', closeOnBackdropClick);

			window.removeEventListener('keydown', keyDownHandler);
		};
	}, [isOpen, keyDownHandler, closeOnBackdropClick]);

	useEffect(() => {}, [isOpen]);

	return createPortal(
		isOpen && (
			<ModalBox aria-modal='true' ref={modalRef}>
				<CloseButton type='button' onClick={closeModal} aria-label='모달 닫기'>
					x
				</CloseButton>
				<ModalContent>{children}</ModalContent>
			</ModalBox>
		),
		root
	);
};

export default Modal;
