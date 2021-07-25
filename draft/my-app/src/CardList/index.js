import React, { useContext } from 'react';
import { Card } from '../Card';
import { ListContext } from '../settings';

import '../App.css';

export const CardList = () => {
    const { citiesList } = useContext(ListContext);
    console.log('citiesList', citiesList);
    return (
        <div className="CardList">
            {citiesList.map((cityName) => (<Card key={cityName} cityName={cityName} />))}
        </div>
    )
};
