import { useState, useEffect, useMemo } from 'react';
import { getCirculars } from '../../contentful';

export const useGetCirculars = () => {
    const [ circulars, setCirculars ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const fetchCirculars = async () => {
        try {
            const circulars= await getCirculars();

            setCirculars(circulars);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
        };
        fetchCirculars();
    }, []);

    const memorizedCirculars= useMemo(() => circulars, [circulars]);

    return {
        memorizedCirculars,
        isLoading
    }
}
