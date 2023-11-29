import { client } from "../../client";

const getServiceBySlug = async (slug) => {
    const serviceQuery = `query {
      servicesCollection(limit: 1, where: { slug: "${slug}" } ) {
        items{
          title
          slug
          whiteIcon {
            url
            title
          }
          icon{
            url
            title
          }
        }
      }
    }`;
    
    try {
      const data = await client.request(serviceQuery);
      const { servicesCollection: { items }  } = data;
      return items[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export {
    getServiceBySlug 
  };