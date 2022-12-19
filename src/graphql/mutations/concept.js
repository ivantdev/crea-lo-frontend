import { gql } from '@apollo/client'

export const CREATE_CONCEPT = gql`
mutation CreateConcept($name: String!) {
    createConcept(data: { name: $name, publishedAt:"2007-12-03T10:15:30Z"}) {
      data {
        id
        attributes {
          name
          publishedAt
        }
      }
    }
  }
`

export const UPDATE_CONCEPT = gql`
mutation updateConcept($id: ID!, $definitions: [ID!], $concepts:[ID!]) {
    updateConcept(id:$id, data: {definitions: $definitions, concepts: $concepts}){
      data{
        id
        attributes{ 
          definitions{
            data{
              id
              attributes{
                content
              }
            }
          }
          concepts{
            data{
              id
              attributes{
                name
              }
            }
          }
        }
      }
    }
  }
   
`

export const DELETE_CONCEPT = gql`
mutation DeleteConcept($id: ID!) {
    deleteConcept(id:$id) {
      data {
        id
      }
    }
  }
`

