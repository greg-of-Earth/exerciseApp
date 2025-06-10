import { useCallback, useState } from "react";

// hook to return search logic 
export function useHandleSearch (apiBaseUrl: string) {
    // state to hold the return search results
    const [results, setResults] = useState<any[]>([]);

    // fetch data in backend
    const handleSearch = useCallback(
        async (event: { nativeEvent: { text: string} }) => {
            const query = event.nativeEvent.text;
        
        try {
            const response = await fetch(`http://192.168.1.4:3000/api/exercises?query=${encodeURIComponent(query)}`);
            const data = await response.json(); // get search results
            console.log('Search results:', data)
            setResults(data); // update the state of search component
        } catch (err) {
            console.error('Search failed:', err);
        }
    },
    [apiBaseUrl]    
    );

    return { results, handleSearch};

}