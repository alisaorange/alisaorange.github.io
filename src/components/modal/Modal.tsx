import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

export interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    if (!visible) return null;

    // Используем портал для монтирования модального окна в body
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    ×
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>,
        document.body
    );
};