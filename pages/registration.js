import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import Loading from "../components/Loading";
// import Error from "../components/Error";
import Ok from "../components/Done";
import axios from "axios";
import Head from "next/head";

export default function Registration() {
  var [Name, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [Email, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [Phone, setPhone] = useState("");
  const inputPhone = (inp) => {
    setPhone(inp.target.value);
  };
  var [Place, setPlace] = useState("");
  const inputPlace = (inp) => {
    setPlace(inp.target.value);
  };
  var [School, setSchool] = useState("");
  const inputSchool = (inp) => {
    setSchool(inp.target.value);
  };
  var [Year, setYear] = useState("");
  const inputYear = (inp) => {
    setYear(inp.target.value);
  };
  var [Passout, setPassout] = useState("");
  const inputPassout = (inp) => {
    setPassout(inp.target.value);
  };

  const heading = "Let's Dev (Ignite) Registration";
  const formID = "1FAIpQLScwO-jVqC0GeP3QNuVIdwIzkhYZfYiFa4FzPW_youI8rs2uzA";
  const nameIDs = [
    "1205613165",
    "1630402943",
    "644329212",
    "550301818",
    "1347131578",
    "1327591120",
    "1922783086",
  ];

  var io = [
    [
      "Your full name please (We'll mention this on your certificate)",
      "Full name",
      inputName,
      Name,
    ],
    ["And your email address?", "Email address", inputEmail, Email],
    ["What's your phone number? (WhatsApp)", "Phone number", inputPhone, Phone],
    [
      "Your school's/university's District/City and State",
      "District/City and State",
      inputPlace,
      Place,
    ],
    [
      "The name of your school/university",
      "Name of your school/university",
      inputSchool,
      School,
    ],
    [
      "Your current school grade / university year",
      "Your current school grade / university year",
      inputYear,
      Year,
    ],
    [
      "The year you will pass out of your school/university",
      "The year you will pass out of your school/university",
      inputPassout,
      Passout,
    ],
  ];

  const [isok, setok] = useState(true);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  function handleSubmit() {
    var urlAttr = "";
    for (let i = 0; i < io.length; i++) {
      //   :/?#[]@!$&'()*+,;=%
      var temp = io[i][3]
        .replace("%", "%25")
        .replace(" ", "%20")
        .replace(":", "%3A")
        .replace("/", "%2F")
        .replace("?", "%3F")
        .replace("#", "%23")
        .replace("[", "%5B")
        .replace("]", "%5D")
        .replace("@", "%40")
        .replace("!", "%21")
        .replace("$", "%24")
        .replace("&", "%26")
        .replace("'", "%27")
        .replace("(", "%28")
        .replace(")", "%29")
        .replace("*", "%2A")
        .replace("+", "%2B")
        .replace(",", "%2C")
        .replace(";", "%3B")
        .replace("=", "%3D");
      var temp2 = "entry." + nameIDs[i] + "=" + temp;
      if (!(temp2 === " " || temp2 === "")) {
        urlAttr += temp2;
      }

      if (i !== io.length - 1) {
        urlAttr += "&";
      }
    }
    for (let i = 0; i < io.length; i++) {
      if (String(io[i][3]).trim() == "") {
        alert("Please fill all fields before submitting!");
        return null;
      }
    }
    var url =
      "https://docs.google.com/forms/d/e/" +
      formID +
      "/formResponse?" +
      urlAttr;
    try {
      axios.post(url, null, null).catch((axie) => {
        console.log(axie);
      });
      setok(false);
    } catch {}
  }

  function handleSubmitInit() {
    if (emailPattern.test(Email)) {
      if (phonePattern.test(Phone)) {
        handleSubmit();
      } else {
        alert("Please enter a valid phone number!");
      }
    } else {
      alert("Please enter a valid email address!");
    }
  }

  const forHead = (
    <Head>
      <title>Sketch Club | {heading}</title>
      <meta name="description" content={"Sketch Club | " + heading} />
    </Head>
  );

  if (isok) {
    return (
      <div id="CustomFormDiv">
        {forHead}
        <h2>{heading}</h2>
        <Form id="CustomForm">
          {io.map((arr, ind) => {
            return (
              <Form.Group className="mb-3" key={ind}>
                <Form.Label>{arr[0]}</Form.Label>
                <Form.Control
                  placeholder={arr[1]}
                  onChange={arr[2]}
                  required
                ></Form.Control>
              </Form.Group>
            );
          })}
          <Button
            variant="outline-light"
            onClick={() => {
              handleSubmitInit();
            }}
          >
            <span> Submit </span>
          </Button>
        </Form>
      </div>
    );
  } else {
    return (
      <>
        {forHead}
        <Ok />
      </>
    );
  }
}
