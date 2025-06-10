import { createContext } from 'react';

export const SearchContext = createContext<{ results: any[] }>({ results: [] });