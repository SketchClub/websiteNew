import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { Button, Form } from "react-bootstrap";
import { BsPersonPlusFill as PersonPlusFill } from "react-icons/bs";

import Loading from "../components/Loading";
import Error from "../components/Error";

import { useMutation } from "@apollo/client";
import { joinQuery } from "../graphQL/join";
import { apoClient } from "../graphQL/client";

export default function Join() {
  var [Name, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [Email, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [YearSec, setYaS] = useState("");
  const inputYaS = (inp) => {
    setYaS(inp.target.value);
  };
  var [RAnum, setRAnum] = useState("");
  const inputRAnum = (inp) => {
    setRAnum(inp.target.value);
  };
  var [Phone, setPhone] = useState(0);
  const inputPhone = (inp) => {
    setPhone(inp.target.value);
  };
  var [Hobby, setHobby] = useState("");
  const inputHobby = (inp) => {
    setHobby(inp.target.value);
  };
  var [StrWek, setStrWek] = useState("");
  const inputSaW = (inp) => {
    setStrWek(inp.target.value);
  };
  var [Domain, setDomain] = useState("");
  const inputDomain = (inp) => {
    setDomain(inp.target.value);
  };

  const [joinSubmit, { loading, error }] = useMutation(joinQuery, {
    client: apoClient,
  });

  async function handleSubmit() {
    try {
      joinSubmit({
        variables: {
          Name: Name,
          email: Email,
          yearAndSection: YearSec,
          RAnum: RAnum,
          phone: parseInt(Phone),
          hobby: Hobby,
          strengthAndWeakness: StrWek,
          domain: parseInt(Domain),
        },
      }).then(() => {
        alert("Submitted!");
      });
    } catch (e) {
      console.log(e);
    }
  }

  if (error) {
    console.log(error);
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div id="JoinDiv">
      <Head>
        <title>Sketch | Join us</title>
        <meta
          name="description"
          content="SKETCH CLUB | SRM RAMAPURAM | Join the team of Sketch Club and be a part of our family"
        />
      </Head>
      <h1>Be a part of our family!</h1>
      <p>
        We’re always on the lookout for awesome and creative minds to join our
        club to kick off your career. For a further look into who we are head to
        our{" "}
        <Link href="/about">
          <a>about page</a>
        </Link>
        . <br></br>
        <br></br>To send us your info fill out the form below. If you have any
        questions feel free to{" "}
        <Link href="/contact">
          <a>contact us</a>
        </Link>
        .<br></br>
        <br></br>We promise that it will be a super chill interview.
      </p>
      <div className="JoinFormDiv">
        <Form>
          <Form.Group className="name mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Please enter your full name."
              onChange={inputName}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="email mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your e-mail address."
              onChange={inputEmail}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="year_section mb-3">
            <Form.Label>Year & Section</Form.Label>
            <Form.Control
              placeholder="Which year you are in and what's your class section? (Format: 3/E)"
              onChange={inputYaS}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="RA mb-3">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              placeholder="Please enter your SRM Registration (RA) number. (Format: RA1911003020296)"
              onChange={inputRAnum}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="contact mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="\d*"
              size="10"
              placeholder="Please enter your primary contact number. (10 digits only)"
              onChange={inputPhone}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="hobbies mb-3">
            <Form.Label>
              What are your hobbies? Do those hobbies differ from your passion?
            </Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={7}
              placeholder="Be creative and descriptive."
              onChange={inputHobby}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="strength_weakness mb-3">
            <Form.Label>What are your strengths and weaknesses?</Form.Label>
            <Form.Control
              type="message"
              as="textarea"
              rows={7}
              placeholder="Be creative and descriptive."
              onChange={inputSaW}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="domain mb-3">
            <Form.Label>
              Kindly choose among the following domains which fit the most to
              your passion.
            </Form.Label>
            <Form.Select onChange={inputDomain} defaultValue="0">
              <option value="0" disabled>
                Select Here.
              </option>
              <option value="4" onChange={inputDomain}>
                Media
              </option>
              <option value="6" onChange={inputDomain}>
                Research & Development
              </option>
              <option value="2" onChange={inputDomain}>
                Designing
              </option>
              <option value="1" onChange={inputDomain}>
                Content writing
              </option>
              <option value="5" onChange={inputDomain}>
                Organizing & PR
              </option>
              <option value="3" onChange={inputDomain}>
                Gaming
              </option>
            </Form.Select>
          </Form.Group>
          <Link href="/">
            <a>
              <Button
                variant="outline-light"
                onClick={(eve) => {
                  eve.preventDefault();
                  handleSubmit();
                }}
              >
                <span> Submit </span> <PersonPlusFill />
              </Button>
            </a>
          </Link>
        </Form>
      </div>
    </div>
  );
}
