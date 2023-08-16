import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp,
    faArrowDown,
    faArrowRight,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const DirectionButton = ({button}) => {

    return (
        <button onClick={() => button.onClick(button.direction)} className={button.isButtonActive ? 'active' : ''}>
            <FontAwesomeIcon icon={button.buttonIcon}
            className={button.buttonClasses}
            />
            
        </button>
    );
};

export default DirectionButton;