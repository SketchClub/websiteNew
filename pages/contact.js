import { contactText } from "../public/assets/texts/contact";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { newContact } from "../graphQL/contact";
import { apoClient } from "../graphQL/client";
import { useMutation } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AstroDone from "../components/Done";
import Head from "next/head";

export default function Contact() {
  const [NAME, setName] = useState("");
  const [EMAIL, setEmail] = useState("");
  const [MSG, setMsg] = useState("");
  const [done, setDone] = useState(false);

  const [ContactSubmit, { loading, error }] = useMutation(newContact, {
    client: apoClient,
  });

  if (loading) {
    console.log("loading...");
    return <Loading />;
  }
  if (error) {
    console.log("error...");
    return <Error />;
  }
  if (done) {
    return <AstroDone />;
  }

  async function handleSubmit() {
    try {
      await ContactSubmit({
        variables: {
          name: NAME,
          email: EMAIL,
          message: MSG,
        },
      })
        .then((dataFinal) => {
          console.log(dataFinal);
          try {
            if (Object.keys(dataFinal).length === 1) {
              alert(
                "Submitted!, Thankyou, " +
                  dataFinal.data.createContact.contact.name
              );
              setDone(true);
              return null;
            }
          } catch {}
        })
        .catch(() => {
          console.log("Error!");
        });
    } catch {
      console.log("Error!");
    }
  }

  return (
    <div id="contact">
      <Head>
        <title>Sketch | Contact us</title>
        <meta
          name="description"
          content="SKETCH CLUB | SRM RAMAPURAM | Contact the Sketch Team"
        />
      </Head>
      <h1>Feel free to contact us.</h1>
      {contactText.split("\n").map((p, i) => {
        return <p key={i}>{p}</p>;
      })}
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter your full name"
            onChange={(inp) => {
              setName(inp.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please enter your e-mail address"
            onChange={(inp) => {
              setEmail(inp.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please type your message"
            as="textarea"
            rows={10}
            onChange={(inp) => {
              setMsg(inp.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="outline-light"
          type="submit"
          onClick={(eve) => {
            eve.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
