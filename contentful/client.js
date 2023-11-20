

import { GraphQLClient } from 'graphql-request';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const deliveryToken = import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_NODE_ENV;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${deliveryToken}`
  }
});

export {
  client
};