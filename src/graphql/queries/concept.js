import { gql } from '@apollo/client';

export const GET_CONCEPTS = gql`
    query GetConcepts {
        concepts {
            data {
                id
                attributes {
                    name
                    definitions {
                        data {
                            id
                            attributes {
                                content
                            }
                        }
                    }
                    concepts {
                        data {
                            id
                        }
                    }
                }
            }
        }
    }
`