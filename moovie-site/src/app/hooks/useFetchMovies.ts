import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";


interface movieType {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}
const useFetchMovies = () => {
    const [movies, setMovies] = useState<Array<movieType>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const data = await fetchMovies();
                setMovies(data.results); 
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    return { movies, error, loading };
};
export default useFetchMovies;





