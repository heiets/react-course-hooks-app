import React, { useState, useContext } from 'react';

import { ListContext } from '../settings';

import '../App.css';

export const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const { setCitiesList } = useContext(ListContext);
    const handleAddCity = () => {
        setCitiesList((currentCities) => [...currentCities, inputValue])
        setInputValue('');
    }
    return (
        <div className="InputWrap">
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className="Input" />
            <button className="AddButton" onClick={handleAddCity}>
                +
            </button>
        </div>
    )
};
