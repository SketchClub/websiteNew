import { gql } from "@apollo/client";

export const getAlumni = gql`
  query {
    clubRole(id: 1) {
      Role
      members(sort: "Name") {
        Name
        id
        InstaID
        Email
        ProfilePicture {
          url
        }
      }
    }
  }
`;

export const getManagers = gql`
  query {
    clubRole(id: 10) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;

export const get2021 = gql`
  query {
    clubRole(id: 20) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;

export const get2022 = gql`
  query {
    clubRole(id: 21) {
      members(sort: "Name") {
        Name
        id
        ProfilePicture {
          url
        }
        InstaID
        Email
        club_roles {
          Role
        }
      }
    }
  }
`;
