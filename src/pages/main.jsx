import React from "react";
import "../style/pages/main.css";
import { hours } from "../data";
import { info } from "../data";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Slider } from "../components/slider";

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
      {/* About Section */}
      <div className="about">
        <div className="header_about">Welcome to the Forge!</div>
        <div className="text_about">
          <p className="about_descr">
            Step into The Chabot Forge, a hub for craftsmanship and creativity.
            With state-of-the-art tools like 3D printers and a laser cutter,
            it's a space for all makers, from novices to pros, to collaborate
            and bring ideas to life. Join our community to learn, grow, and
            create together.
          </p>
        </div>
        <div className="btn_about ">
          <button
            class="frog-button"
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
            class="frog-button"
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
      <div className="main_slider">
        <Slider />
      </div>
      <div id="schedule_sec" className="schedule_sec">
        <div className="schedule_header">Schedule</div>
        <div className="hours">
          <div className="hour closed">Monday: {hours.mon}</div>
          <div className="hour closed">Tuesday: {hours.tue}</div>
          <div className="hour open">Wednesday: {hours.wed}</div>
          <div className="hour closed">Thursday: {hours.thu}</div>
          <div className="hour closed">Friday: {hours.fri}</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
