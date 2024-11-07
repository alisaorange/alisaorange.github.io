import React from 'react';
import './toggleButton.css';
import cn from 'clsx';

interface ToggleButtonProps {
    leftLabel: string;
    rightLabel: string;
    onClickLeft: () => void;
    onClickRight: () => void;
    isLeftActive: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ leftLabel, rightLabel, onClickLeft, onClickRight, isLeftActive }) => {

    return (
        <div>
            <button onClick={onClickLeft} className={cn('toggle-button', isLeftActive ? 'active' : 'inactive')}>{leftLabel}</button>
            <button onClick={onClickRight} className={cn('toggle-button', !isLeftActive ? 'active' : 'inactive')}>{rightLabel}</button>
        </div>
    );
};

export default ToggleButton;
