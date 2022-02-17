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
        club_roles {
          Role
        }
      }
    }
  }
`;

export const getManagers = gql`
  query {
    clubRole(id: 2) {
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
    clubRole(id: 11) {
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
    clubRole(id: 12) {
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
