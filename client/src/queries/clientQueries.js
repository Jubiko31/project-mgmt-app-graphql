import { gql } from '@apollo/client';

const GET_CLIETNS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

export { GET_CLIETNS }