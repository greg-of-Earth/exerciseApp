import SearchExerciseList from '@/components/exerciseSearchList';
import { SearchContext } from '@/context/SearchContext';
import { useContext } from 'react';


export default function HomePage() {
    const { results } = useContext(SearchContext);
    return <SearchExerciseList results={results} />;
}