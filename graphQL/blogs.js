import { gql } from "@apollo/client";

export const allBlogs = gql`
  query {
    blogs(sort: "PublishingDate") {
      id
      Title
      OneLiner
      PublishingDate
      member {
        Name
        Email
        InstaID
        ProfilePicture {
          url
        }
      }
    }
  }
`;

export function oneBlog(blogID) {
  return gql`
  query oneBlog{
    blog(id:${blogID}){
      Title
      OneLiner
      PublishingDate
      member{
        Name
        InstaID
        Email
        ProfilePicture{
          url
        }
      }
      Content
    }
  }
`;
}
