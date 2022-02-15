import { gql } from "@apollo/client";

export const newContact = gql`
  mutation createContact($name: String!, $email: String!, $message: String!) {
    createContact(
      input: { data: { name: $name, email: $email, message: $message } }
    ) {
      contact {
        name
        email
        message
      }
    }
  }
`;
