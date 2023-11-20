import { useState, useEffect } from 'react';
import { getServiceBySlug } from '../../contentful';

export const useGetServiceBySlug = (slug) => {
    const [ service, setService ] = useState({});

    useEffect(() => {
        const fetchService = async () => {
        try {
            const service = await getServiceBySlug(slug);
            setService(service);
        } catch (error) {
            console.error(error);
        }
        };
        fetchService();
    }, [ slug ]);

    return {
        service
    }
}
