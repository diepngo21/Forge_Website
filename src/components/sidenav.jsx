import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaTools, FaNewspaper } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

import "../style/components/sidenav.css";

export const SideNav = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => (event) => {
    event.preventDefault();
    navigate("/", { state: { scrollTo: sectionId } });
  };
  return (
    <div className="sidenav_box">
      <div className="sidenav_content">
        <Link to="*" className="sidenav_link">
          <FaHome className="icon" />
          <span className="link_text">Home</span>
        </Link>
        <Link to="/safety" className="sidenav_link">
          <AiFillSafetyCertificate className="icon" />
          <span className="link_text">Safety</span>
        </Link>
        <Link to="/tools" className="sidenav_link">
          <FaTools className="icon" />
          <span className="link_text">Services</span>
        </Link>
        <Link to="/new" className="sidenav_link">
          <FaNewspaper className="icon" />
          <span className="link_text">News</span>
        </Link>
        <a
          href="#"
          className="sidenav_link"
          onClick={handleScroll("contact_sec")}
        >
          <RiContactsFill className="icon" />
          <span className="link_text">Contact</span>
        </a>
        <a
          href="#"
          className="sidenav_link"
          onClick={handleScroll("schedule_sec")}
        >
          <FaCalendarAlt className="icon" />
          <span className="link_text">Schedule</span>
        </a>
      </div>
    </div>
  );
};
