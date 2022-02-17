import Image from "next/image";
import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { apoClient } from "../../graphQL/client";
import { newEventsList, pastEventsList } from "../../graphQL/events";
import Error from "../../components/Error";

export default function Events({ eventsProps }) {
  var newEvents = [];
  var pastEvents = [];

  try {
    newEvents = eventsProps[0].eventCatagory.events;
    pastEvents = eventsProps[1].eventCatagory.events;
  } catch {
    return <Error />;
  }

  let newEves = <br></br>;
  let pastEves = <br></br>;

  if (newEvents.length !== 0) {
    newEves = (
      <div className="newEvents black-text-outline">
        <Head>
          <title>Sketch | Events</title>
          <meta
            name="description"
            content="SKETCH CLUB | SRM RAMAPURAM | Events conducted / held / organized by Sketch Club"
          />
        </Head>
        <h1>Upcoming Events</h1>
        <Row sm={2} md={4}>
          {newEvents.map((Eve) => (
            <Col key={Eve.id}>
              <div className="imgContainer">
                <Link href={`/events/${Eve.id}`}>
                  <a>
                    <Image
                      src={Eve.Poster.url}
                      alt={Eve.Title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
              <Link href={`/events/${Eve.id}`}>
                <a className="title">
                  <h2>{Eve.Title}</h2>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
  if (pastEvents.length !== 0) {
    pastEves = (
      <div className="pastEvents black-text-outline">
        <h1>Events</h1>
        <Row sm={2} md={4}>
          {pastEvents.map((Eve) => (
            <Col key={Eve.id}>
              <div className="imgContainer">
                <Link href={`/events/${Eve.id}`}>
                  <a>
                    <Image
                      src={Eve.Poster.url}
                      alt={Eve.Title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
              <Link href={`/events/${Eve.id}`}>
                <a className="title">
                  <h2>{Eve.Title}</h2>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <div id="events">
      {newEves}
      {pastEves}
    </div>
  );
}

export async function getServerSideProps() {
  const { data: nE } = await apoClient.query({ query: newEventsList });
  const { data: pE } = await apoClient.query({ query: pastEventsList });
  return {
    props: { eventsProps: [nE, pE] }, // will be passed to the page component as props
  };
}
