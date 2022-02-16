import { get2021, get2022, getAlumni, getManagers } from "../graphQL/team";
import apoClient from "../graphQL/client";

import { Row, Col, Card } from "react-bootstrap";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";
import { MdEmail as EmailIcon } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Team({ managers, alumni, members }) {
  return (
    <div id="team">
      <h1>Our Team Family</h1>
      <div className="managers">
        <h2>The Hokages</h2>
        <Row xs={1} sm={1} md={4}>
          {managers.map((Manager) => (
            <Col key={Manager.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Manager.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                  <Card.Title>{getDisplayName(Manager.Name)}</Card.Title>
                  <p>{Manager.club_roles[0].Role}</p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + Manager.InstaID}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon fontSize="2rem" />
                    </a>
                    <a
                      href={"mailto:" + Manager.Email}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <EmailIcon fontSize="2rem" />
                    </a>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="members"></div>
      <div className="alumni"></div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: mem2021 } = await apoClient.query({ query: get2021 });
  const { data: mem2022 } = await apoClient.query({ query: get2022 });
  const { data: alumni } = await apoClient.query({ query: getAlumni });
  const { data: managers } = await apoClient.query({ query: getManagers });
  return {
    props: {
      managers: managers.clubRole.members,
      alumni: alumni.clubRole.members,
      members: {
        _2021: mem2021.clubRole.members,
        _2022: mem2022.clubRole.members,
      },
    }, // will be passed to the page component as props
  };
}
