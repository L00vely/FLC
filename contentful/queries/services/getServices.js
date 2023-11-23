import { client } from "../../client";

const getServices = async () => {
    const servicesQuery = `query {
      servicesCollection {
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
      console.log(items);
      return items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export {
      getServices
  };