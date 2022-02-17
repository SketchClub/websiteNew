import { gql } from "@apollo/client";

export function authorBlogs(authorID) {
  return gql`
    query {
      member(id: ${authorID}) {
        Name
        ProfilePicture {
          url
        }
        InstaID
        Email
        Blogs {
          Title
          OneLiner
          PublishingDate
        }
      }
    }
  `;
}
