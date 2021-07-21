import React from 'react';
import { Card } from '../Card';

import '../App.css';

export const CardList = () => {
    return (
        <div className="CardList">
            {['Kyiv', 'New York'].map((cityName) => (<Card key={cityName} cityName={cityName}/>))}
        </div>
    )
};
