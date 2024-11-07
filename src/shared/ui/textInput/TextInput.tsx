import React from 'react';
import './textInput.css';

interface TextInputProps {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({type = 'text', placeholder = '', value, onChange, className = '', disabled = false }) => {
    return (
        <input
            type={type}
            className={`text-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default TextInput;
