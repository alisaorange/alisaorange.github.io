// Modal.tsx
import React from 'react';
import './modal.css';

export interface ModalProps {
    visible: boolean;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {
    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-window">
                <button className="modal-close-button">×</button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};
