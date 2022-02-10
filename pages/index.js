import Head from "next/head";
import dynamic from "next/dynamic";

import { welcome, heading, para } from "../public/assets/texts/home";

import Link from "next/link";
import { Button } from "react-bootstrap";
import { BsArrowBarRight } from "react-icons/bs";
const Lottie = dynamic(() => import("lottie-react"));

import designAni from "../public/assets/lottie/design_old.json";
import developAni from "../public/assets/lottie/develop_old.json";
import deliverAni from "../public/assets/lottie/deliver_old.json";
const aniDDD = [
  ["Design", designAni],
  ["Develop", developAni],
  ["Deliver", deliverAni],
];

import useInView from "react-cool-inview";

export default function Home() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <div id="home">
      <Head>
        <title>Sketch | Home</title>
        <meta
          name="description"
          content="SKETCH CLUB | SRM RAMAPURAM | Sketch is a community of ideas helping students take a stance for their passion and building their own profile whilst encouraging their entrepreneurial endeavours."
        />
        <meta
          name="keywords"
          content="sketch, sketch club, club, srm, ramapuram, srm ramapuram, sketch club srm, sketch srm, club srm"
        />
      </Head>
      <div className="intro">
        <h1 className="black-text-outline">{welcome}</h1>
        <p className="head bold-para black-text-outline">{heading}</p>
        <p className="para">{para}</p>
        <Link href="/about">
          <a style={{ width: "fit-content" }} aria-label="Explore">
            <Button
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="outline-light"
              id="btn_explore_home"
            >
              Explore us
              <BsArrowBarRight />
            </Button>
          </a>
        </Link>
      </div>
      <div className="lottie">
        <p className="lottieHead black-text-outline">
          Our workshops & events empower you to:
        </p>
        <div className="lottieCards" ref={observe}>
          {aniDDD.map((ani, ind) => {
            return (
              <div
                key={ind}
                className="lottie-animation-container black-text-outline"
              >
                <span>{ani[0]}</span>
                {inView && (
                  <Lottie animationData={ani[1]} autoPlay loop></Lottie>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
