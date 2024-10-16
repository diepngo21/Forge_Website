import React from "react";
import "../style/pages/main.css";
import { hours } from "../data";
import { info } from "../data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/pages/main/logo.png";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Link } from "react-router-dom";

import { Slider } from "../components";

export const Main = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location.state]);

  return (
    <div className="main">
      <div className="logo_home">
        <img className="logo_img" src={logo}></img>
      </div>
      {/* About Section */}
      <div className="about">
        <div className="content_about">
          <div className="header_about">Welcome to the Forge!</div>
          <div className="text_about">
            <p className="descr_about">
              Step into The Chabot Forge, a hub for craftsmanship and
              creativity. With state-of-the-art tools like 3D printers and a
              laser cutter, it's a space for all makers, from novices to pros,
              to collaborate and bring ideas to life. Join our community to
              learn, grow, and create together.
            </p>
          </div>
          <div className="btn_about ">
            <button
              className="frog-button"
              type="button"
              onClick={() => scrollToSection("contact_sec")}
            >
              <span class="frog-eyes">
                <span class="frog-eye left-eye"></span>
                <span class="frog-eye right-eye"></span>
              </span>
              Contact
            </button>
            <button
              className="frog-button"
              type="button"
              onClick={() => scrollToSection("schedule_sec")}
            >
              <span class="frog-eyes">
                <span class="frog-eye left-eye"></span>
                <span class="frog-eye right-eye"></span>
              </span>
              Schedule
            </button>
          </div>
        </div>
      </div>
      <div className="main_slider">
        <Slider></Slider>
      </div>
      <div id="schedule_sec" className="schedule_sec">
        <div className="schedule_content">
          <p className="schedule_header">Schedule</p>
          <div className="hours">
            <div className="hour closed">Monday: {hours.mon}</div>
            <div className="hour closed">Tuesday: {hours.tue}</div>
            <div className="hour open">Wednesday: {hours.wed}</div>
            <div className="hour closed">Thursday: {hours.thu}</div>
            <div className="hour closed">Friday: {hours.fri}</div>
          </div>
        </div>
      </div>
      <div id="contact_sec" className="contact_sec">
        <div className="contact_header">Contact Us:</div>
        <div className="contact_descr">
          <div className="map">
            <iframe
              width="400"
              height="320"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=37.6404075,%20-122.1062584+(Chabot%20College)&amp;t=&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              {" "}
            </iframe>
          </div>
          <div className="contact_info">
            <p className="info">{info.school}</p>
            <p className="info">{info.address}</p>
            <p className="info">Room: {info.room}</p>
            <div className="email" style={{ marginTop: "50px" }}>
              <p className="info" style={{ display: "inline" }}>
                Email:
                <a
                  href="mailto:jgochuico@chabotcollege.edu?subject=MessMe&body=Message"
                  style={{ display: "inline", textDecoration: "none" }}
                >
                  {" "}
                  <span style={{ textDecoration: "underline", color: "white" }}>
                    {info.email}
                  </span>
                </a>
              </p>
            </div>
            <div className="icon_list">
              <Link
                target="_blank"
                className="icon_info"
                to={
                  "https://www.notion.so/introtoengineering/Chabot-Lab-Tech-Phys-Astro-Geol-Engr-03efad4034314e35919771e3bac69707"
                }
              >
                <SiNotion />
              </Link>
              <Link
                target="_blank"
                className="icon_info"
                to={"https://www.tiktok.com/@chabotforge"}
              >
                <FaTiktok />
              </Link>
              <Link
                target="_blank"
                className="icon_info"
                to={"https://www.instagram.com/chabotforge/"}
              >
                <AiFillInstagram />
              </Link>
              <Link
                target="_blank"
                className="icon_info"
                to={"https://discord.gg/qXgpDbY6Fc"}
              >
                <FaDiscord />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
