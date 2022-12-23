import { gql } from '@apollo/client';

export const GET_TAG = gql`
query getTag($id: ID!) {
    tag(id: $id){
      data{
        id
        attributes{
          name
          images{
            data{
              id
              attributes{
                file{
                  data{
                    id
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
          videos{
            data{
              id
              attributes{
                link
              }
            }
          }
          creations{
            data{
              id
              attributes{
                title
                content
              }
            }
          }
          next{
            data{
              id
            }
          }
          previous{
            data{
              id
            }
          }
        }
      }
    }
  }
`