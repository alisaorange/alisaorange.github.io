// Modal.tsx
import React from 'react';
import './modal.css';

export interface ModalProps {
    visible: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>×</button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );

};
