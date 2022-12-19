import { ApolloClient, InMemoryCache } from '@apollo/client';
import dotenv from "dotenv"
dotenv.config()
const client = new ApolloClient({
    uri: process.env.GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export default client;