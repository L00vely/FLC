import { services } from "../util/services";

export const getService = ( title ) => {
    return services.filter( service => service.title.toUpperCase() === title)
}