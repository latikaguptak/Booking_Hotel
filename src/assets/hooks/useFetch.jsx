import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${apiUrl}/${url}`);
                setData(res.data);
            } catch (err) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, apiUrl]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/${url}`);
            setData(res.data);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, reFetch };
};

export default useFetch;
