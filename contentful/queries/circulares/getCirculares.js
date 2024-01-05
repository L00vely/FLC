import { client } from "../../client";

const getCirculars = async () => {
    const circularsQuery = `query {
      circularCollection(order: [date_DESC]) {
        items{
          title
          slug
          pdf {
            url
            title
          }
          date
          description
        }
      }
    }`;
    
    try {
      const data = await client.request(circularsQuery);
      const { circularCollection } = data;
      const { items } = circularCollection;
      return items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export {
      getCirculars
  };
