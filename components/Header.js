import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  function navi() {
    try {
      //toggle nav
      document.querySelector(".nav-links").classList.toggle("nav-active");
      //animate links
      document.querySelectorAll(".nav-links li").forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      //burger animation
      document.querySelector(".burger").classList.toggle("toggle");
      document.addEventListener("scroll", function elos() {
        //toggle nav
        document.querySelector(".nav-links").classList.toggle("nav-active");
        //animate links
        document.querySelectorAll(".nav-links li").forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`;
          }
        });
        //burger animation
        document.querySelector(".burger").classList.toggle("toggle");
        document.removeEventListener("scroll", elos);
      });
    } catch {}
  }
  return (
    <div id="header">
      <Link href="/">
        <a className="img" aria-label="Home">
          <Image
            src="/assets/images/logo.png"
            alt="Sketch logo"
            layout="fill"
            objectFit="contain"
            priority={true}
            as="img"
          />
        </a>
      </Link>
      <div className="btns">
        <Link href="/events">
          <a aria-label="Events">
            <Button variant="outline-light" id="btn_eve_head">
              Our Events
            </Button>
          </a>
        </Link>
        <Link href="/team">
          <a aria-label="Team">
            <Button variant="outline-light" id="btn_team_head">
              Our Team
            </Button>
          </a>
        </Link>
        <nav className="headNav">
          <ul className="nav-links">
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/">
                <a aria-label="Home">Home</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/about">
                <a aria-label="About Sketch">About us</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/blogs">
                <a aria-label="Blogs">Blogs</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/contact">
                <a aria-label="Contact">Contact us</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/events">
                <a aria-label="Events">Events</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/join">
                <a aria-label="Join Sketch">Join us</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
            >
              <Link href="/team">
                <a aria-label="Sketch Team">Team</a>
              </Link>
            </li>
            <li
              onClick={() => {
                navi();
              }}
              className="icons"
            >
              <a
                href="https://instagram.com/srmsketch"
                target="_blank"
                rel="noreferrer"
                aria-label="Sketch Instagram"
              >
                <AiFillInstagram color="black" />
              </a>
              <a
                href="https://discord.gg/SCCkz4yX9j"
                target="_blank"
                rel="noreferrer"
                aria-label="Sketch Discord"
              >
                <FaDiscord color="black" />
              </a>
              <a
                href="mailto:sketch.srm@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Sketch Email"
              >
                <MdEmail color="black" />
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="burger"
          onClick={() => {
            navi();
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
}
