import { contactText } from "../public/assets/texts/contact";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { newContact } from "../graphQL/contact";
import { apoClient } from "../graphQL/client";
import { useMutation } from "@apollo/client";

export default function Contact() {
  const [NAME, setName] = useState("");
  const [EMAIL, setEmail] = useState("");
  const [MSG, setMsg] = useState("");

  const [ContactSubmit, { data, loading, error }] = useMutation(newContact, {
    client: apoClient,
    onCompleted: (ocda) => {
      console.log(ocda);
    },
    onError: (errrr) => {
      console.log(errrr);
    },
  });

  if (loading) {
    console.log("loading...");
  }
  if (error) {
    console.log("error...");
  }

  async function handleSubmit() {
    try {
      ContactSubmit({
        variables: {
          name: NAME,
          email: EMAIL,
          message: MSG,
        },
      }).then(() => {
        try {
          if (Object.keys(data).length === 1) {
            alert("Submitted! Thank you, " + data.createContact.contact.name);
          }
        } catch (e) {
          console.log(e);
        }
      });
      // .then(() => {
      //   try {
      //     if (Object.keys(data).length === 1) {
      //       alert(
      //         "Submitted! Thank you, " +
      //           data.createContact.contact.name
      //       );
      //     }
      //   } catch (e) {
      //     console.log(e);
      //   }
      //   if (error) {
      //     return <Error />;
      //   }
      // });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id="contact">
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
