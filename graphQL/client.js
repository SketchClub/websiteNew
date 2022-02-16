import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apoClient = new ApolloClient({
  uri: "https://sketch-back.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default apoClient;
