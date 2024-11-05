import React, {useState} from 'react';
import './inputBtn.css';
import { Modal } from '../modal/Modal';

export interface InputBtnProps {
    initialText?: string;
}

export const InputBtn : React.FC<InputBtnProps> = () => {

    const [inputText, setInputText] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="input-container">
            <input
                type="text"
                className="text-input"
                placeholder="Введите текст"
                value={inputText}
                onChange={handleInputChange}
            />
            <button className="open-button" onClick={openModal}>
                Открыть
            </button>

            <Modal visible={isModalVisible} onClose={closeModal}>
                <div>
                    <p>{inputText}</p>
                </div>
            </Modal>

        </div>
    );

}