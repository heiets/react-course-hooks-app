import { createContext } from 'react';

export const API_KEY = '267d84b5246da60c8d27f95339da5dff';

export const ListContext = createContext({
    citiesList: [],
    setCitiesList: () => { },
});
