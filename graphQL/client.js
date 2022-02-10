import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apoClient = new ApolloClient({
  uri: process.env.API_LINK,
  cache: new InMemoryCache(),
});
