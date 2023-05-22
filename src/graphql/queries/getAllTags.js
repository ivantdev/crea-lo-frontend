import { gql } from "@apollo/client";

export const GET_TAGS_BY_CATEGORY = gql`
  query GetTagsByCategory($category: String!) {
    tags (
      filters: {
        category: {
          name: {
            eq: $category
          }
        }
      }
      sort: "id"
    ) {
      data {
        id
        attributes {
          name
          images {
            data {
              id
              attributes {
                file {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          videos {
            data {
              id
              attributes {
                link
              }
            }
          }
          creations {
            data {
              id
              attributes {
                title
                content
              }
            }
          }
          next {
            data {
              id
            }
          }
          previous {
            data {
              id
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
