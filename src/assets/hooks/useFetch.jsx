import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Initialize error state with null

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${apiUrl}/${url}`);
                setData(res.data); // Update data state with fetched data
            } catch (err) {
                setError(err); // Set error state if request fails
            }
            setLoading(false);
        };

        fetchData(); // Call fetchData initially and whenever url changes
    }, [url, apiUrl]); // Include url and apiUrl in the dependency array

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/${url}`);
            setData(res.data); // Update data state with fetched data
        } catch (err) {
            setError(err); // Set error state if request fails
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;
