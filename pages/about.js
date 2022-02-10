import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

import {
  intro,
  design as designText,
  develop as developText,
  deliver as deliverText,
} from "../public/assets/texts/about";

import { Button } from "react-bootstrap";
import { BsPersonPlusFill } from "react-icons/bs";
const Lottie = dynamic(() => import("lottie-react"));

import designAni from "../public/assets/lottie/design_old.json";
import developAni from "../public/assets/lottie/develop_old.json";
import deliverAni from "../public/assets/lottie/deliver_old.json";

const textsAndAnis = [
  ["Design", designText, designAni],
  ["Develop", developText, developAni],
  ["Deliver", deliverText, deliverAni],
];

export default function about() {
  return (
    <div id="about">
      <Head>
        <title>Sketch | About</title>
        <meta name="description" content="About SKETCH CLUB | SRM RAMAPURAM" />
        <meta
          name="keywords"
          content="sketch, sketch club, club, srm, ramapuram, srm ramapuram, sketch club srm, sketch srm, club srm, about sketch club, about"
        />
      </Head>
      <div className="intro">
        <h1 className="black-text-outline">We{`'`}re Sketch!</h1>
        {intro.split("\n").map((para, index) => {
          return (
            <p key={index} className="black-text-outline">
              {para}
            </p>
          );
        })}
        <Link href="/join">
          <a style={{ width: "fit-content" }} aria-label="Join us">
            <Button
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="outline-light"
              id="btn_join_about"
            >
              Join us
              <BsPersonPlusFill style={{ marginLeft: "7px" }} />
            </Button>
          </a>
        </Link>
      </div>
      <div className="text-and-anis">
        {textsAndAnis.map((data, index) => {
          return (
            <div className="card black-text-outline" key={index}>
              <div className={"text " + "text" + (index + 1)}>
                <h2>{data[0]}</h2>
                <p>{data[1]}</p>
              </div>

              <Lottie
                animationData={data[2]}
                autoPlay
                loop
                className={"lottie " + "ani" + (index + 1)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
