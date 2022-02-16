import { gql } from "@apollo/client";

export const joinQuery = gql`
  mutation (
    $Name: String!
    $email: String!
    $RAnum: String!
    $yearAndSection: String!
    $phone: Long!
    $hobby: String!
    $strengthAndWeakness: String!
    $domain: ID!
  ) {
    createJoin(
      input: {
        data: {
          Name: $Name
          email: $email
          yearAndSection: $yearAndSection
          RAnum: $RAnum
          phone: $phone
          hobby: $hobby
          strengthAndWeakness: $strengthAndWeakness
          domain: $domain
        }
      }
    ) {
      join {
        id
        Name
        domain {
          name
        }
      }
    }
  }
`;
