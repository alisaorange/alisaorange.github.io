import React, {useState} from 'react';
import './inputBtn.css';
import { Modal } from '../modal/Modal';
import {Button} from "src/shared/ui/button/Button";
import TextInput from "src/shared/ui/textInput/TextInput";


export const InputBtn : React.FC = () => {

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
            <TextInput
                placeholder="Введите текст"
                value={inputText}
                onChange={handleInputChange}
            />
            <Button label={'Открыть'} onClick={openModal} />

            <Modal visible={isModalVisible} onClose={closeModal}>
                <div>
                    <p>{inputText}</p>
                </div>
            </Modal>

        </div>
    );

}

export class InputBtnProps {
}