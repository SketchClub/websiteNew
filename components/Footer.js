import { FaDiscord, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { footerAbout } from "../public/assets/texts/footerAbout.js";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer">
      <div className="sitemap no-mobile big-width">
        <span>Sitemap</span>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/events">
          <a>Our Events</a>
        </Link>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="getInTouch big-width">
        <span>Get in touch</span>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
        <Link href="/team">
          <a>Our Team</a>
        </Link>
        <Link href="/join">
          <a>Join us</a>
        </Link>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="icons big-width">
        <div className="up">
          <a
            href="mailto:sketch.srm@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail color="black" />
          </a>
          <a
            href="https://discord.gg/SCCkz4yX9j"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord color="black" />
          </a>
          <a
            href="https://instagram.com/srmsketch"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram color="black" />
          </a>
        </div>
        <div className="down">
          <a href="">
            <FaLinkedin color="black" />
          </a>
          <a href="">
            <AiFillYoutube color="black" />
          </a>
          <a href="">
            <FaFacebook color="black" />
          </a>
        </div>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="intro big-width no-mobile">
        <div className="imgContainer">
          <Image
            src="/assets/images/old_logo.png"
            alt="Sketch old logo"
            className="img"
            layout="fill"
            objectFit="contain"
            quality={50}
          />
        </div>
        <p>{footerAbout}</p>
      </div>
    </div>
  );
}
