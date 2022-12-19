import { gql } from '@apollo/client'

export const UPDATE_DEFINITION = gql`
mutation UpdateDefinition($id: ID!, $content: String!) {
    updateDefinition(id:$id, data: {content: $content}){
      data{
        id
        attributes{
          content
        }
      }
    }
  }
`

export const CREATE_DEFINITION = gql`
mutation CreateDefinition($content: String!) {
    createDefinition(data: { content: $content, publishedAt:"2007-12-03T10:15:30Z"}) {
      data {
        id
        attributes {
          content
          publishedAt
        }
      }
    }
  }
`

export const DELETE_DEFINITION = gql`
mutation DeleteDefinition($id: ID!) {
  deleteDefinition(id:$id) {
    data {
      id
      attributes {
        content
        publishedAt
      }
    }
  }
}
`
