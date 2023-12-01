import { client } from "../../client";

const getServices = async () => {
    const servicesQuery = `query {
      servicesCollection(order: [title_ASC]) {
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
          description
        }
      }
    }`;
    
    try {
      const data = await client.request(servicesQuery);
      const { servicesCollection } = data;
      const { items } = servicesCollection;
      return items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export {
      getServices
  };