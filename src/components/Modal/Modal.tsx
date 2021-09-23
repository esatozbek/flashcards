/** @jsxImportSource theme-ui */
import { ReactElement, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import getModalRoot from 'utils/getModalRoot';
import { ModalPropTypes } from './Modal.types';
import ModalContainer from './views/ModalContainer';

function Modal({
    title,
    showModal,
    onCloseModal,
    children,
    direction = 'bottom',
    absoluteContent,
}: ModalPropTypes): ReactElement | null {
    const elRef = useRef(document.createElement('div'));
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const modalRoot = getModalRoot();
        const { current: el } = elRef;

        if (modalRoot && showModal) {
            modalRoot.appendChild(el);
        }

        return () => {
            if (modalRoot && showModal) {
                modalRoot.removeChild(el);
            }
        };
    }, [elRef, showModal]);

    useEffect(() => {
        function outsideClickListener(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                onCloseModal?.();
            }
        }

        if (showModal) {
            document.addEventListener('click', outsideClickListener);
        } else {
            document.removeEventListener('click', outsideClickListener);
        }

        return () => {
            document.removeEventListener('click', outsideClickListener);
        };
    }, [containerRef, onCloseModal, showModal]);

    if (showModal) {
        return ReactDOM.createPortal(
            <ModalContainer
                ref={containerRef}
                title={title}
                direction={direction}
                absoluteContent={absoluteContent}
            >
                {children}
            </ModalContainer>,
            elRef.current
        );
    }

    return null;
}

export default Modal;
