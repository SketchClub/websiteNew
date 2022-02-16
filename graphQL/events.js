import { gql } from "@apollo/client";
export const newEventsList = gql`
  query nE {
    eventCatagory(id: 2) {
      events(sort: "EventDate:desc") {
        id
        Title
        Poster {
          url
        }
      }
    }
  }
`;
export const pastEventsList = gql`
  query pE {
    eventCatagory(id: 1) {
      events(sort: "EventDate:desc") {
        id
        Title
        Poster {
          url
        }
      }
    }
  }
`;
export function eventQ(eveID) {
  return gql`
  query {
    event(id: ${eveID}) {
      Poster {
        url
      }
      Title
      EventDate
      Content
    }
  }
`;
}
