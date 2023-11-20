import { useState, useEffect, useMemo } from 'react';
import { getServices } from '../../contentful';

export const useGetServices = () => {
    const [ services, setServices ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
        try {
            const services = await getServices();
            setServices(services);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
        };
        fetchServices();
    }, []);

    const memorizedServices = useMemo(() => services, [services]);

    return {
        memorizedServices,
        isLoading
    }
}
