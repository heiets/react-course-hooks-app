import React, { useState } from 'react';

import { ListContext } from './settings';

import { CardList } from './CardList';
import { Input } from './Input';

import './App.css';

const App = () => {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <ListContext.Provider value={{citiesList, setCitiesList}}>
      <div className="Main">
        <Input />
        <CardList />
      </div>
    </ListContext.Provider>
  )
};

export default App