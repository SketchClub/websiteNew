import { get2021, get2022, getAlumni, getManagers } from "../graphQL/team";
import apoClient from "../graphQL/client";

import { Row, Col, Card } from "react-bootstrap";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";
import { MdEmail as EmailIcon } from "react-icons/md";
export default function Team({ managers, alumni, members }) {
  return (
    <div id="team">
      <h1 className="black-text-outline">私たちの家族</h1>
      <div className="managers">
        <h2>The Kage</h2>
        <Row xs={2} sm={2} md={4}>
          {managers.map((Manager) => (
            <Col key={Manager.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={Manager.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end imgOverlay">
                  <Card.Title>{Manager.Name}</Card.Title>
                  <p>{Manager.club_roles[1].Role}</p>
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
      <div className="members">
        <h2>The Jōnin</h2>
        <Row xs={2} sm={2} md={5}>
          {members._2021.map((mem) => (
            <Col key={mem.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={mem.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end imgOverlay">
                  <Card.Title>{mem.Name}</Card.Title>
                  <p>Sketch batch 2021</p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + mem.InstaID}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon fontSize="2rem" />
                    </a>
                    <a
                      href={"mailto:" + mem.Email}
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
        <br />
        <br />
        <Row xs={2} sm={2} md={5}>
          {members._2022.map((mem) => (
            <Col key={mem.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={mem.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end imgOverlay">
                  <Card.Title>{mem.Name}</Card.Title>
                  <p>Sketch batch 2022</p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + mem.InstaID}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon fontSize="2rem" />
                    </a>
                    <a
                      href={"mailto:" + mem.Email}
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
      <div className="alumni">
        <h2>The Jinchūriki</h2>
        <Row xs={2} sm={2} md={5}>
          {alumni.map((alum) => (
            <Col key={alum.id}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  alt="Card image"
                  src={alum.ProfilePicture.url}
                />
                <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end imgOverlay">
                  <Card.Title>{alum.Name}</Card.Title>
                  <p>Alumni</p>
                  <div
                    className="TeamIcons"
                    style={{
                      display: "flex",
                    }}
                  >
                    <a
                      href={"https://instagram.com/" + alum.InstaID}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon fontSize="2rem" />
                    </a>
                    <a
                      href={"mailto:" + alum.Email}
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
