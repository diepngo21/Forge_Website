import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaTools, FaNewspaper } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

import "../style/components/sidenav.css";

export const SideNav = () => {
  const [isSubnavVisible, setIsSubnavVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sidenavRef = useRef(null);

  const handleScroll = (sectionId) => (event) => {
    event.preventDefault();
    navigate("/", { state: { scrollTo: sectionId } });
  };

  const toggleSubnav = () => {
    setIsSubnavVisible(!isSubnavVisible);
  };

  const handleMouseLeave = () => {
    setIsSubnavVisible(false);
  };

  useEffect(() => {
    const sidenav = sidenavRef.current;
    if (sidenav) {
      sidenav.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (sidenav) {
        sidenav.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const isActivePage =
    location.pathname === "*" || location.pathname.startsWith("/service");

  return (
    <div
      className={`sidenav_box ${isActivePage ? "active_sidenav" : ""}`}
      ref={sidenavRef}
    >
      <div className="sidenav_content">
        <Link
          to="/"
          className={`sidenav_link ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <FaHome className="icon" />
          <span className="link_text">Home</span>
        </Link>
        <Link
          to="/safety"
          className={`sidenav_link ${
            location.pathname === "/safety" ? "active" : ""
          }`}
        >
          <AiFillSafetyCertificate className="icon" />
          <span className="link_text">Safety</span>
        </Link>
        <div
          className={`sidenav_link sidenav_service ${
            location.pathname.startsWith("/services") ? "active" : ""
          }`}
          onClick={toggleSubnav}
        >
          <FaTools className="icon" />
          <span className="link_text">Services</span>
          <IoMdArrowDropdown className="sidenav_dropdown" />
        </div>
        <div className={`sidenav_sub ${isSubnavVisible ? "show" : ""}`}>
          <Link to="/services/ankermake" className="sidenav_link">
            <span className="sidenav_subtext">AnkerMake</span>
          </Link>
          <Link to="/services/instron" className="sidenav_link">
            <span className="sidenav_subtext">Instron</span>
          </Link>
          <Link to="/services/laser_cutter" className="sidenav_link">
            <span className="sidenav_subtext">Laser Cutter</span>
          </Link>
          <Link
            to="/services/keyence_digital_microscope"
            className="sidenav_link"
          >
            <span className="sidenav_subtext">Microscope</span>
          </Link>
          <Link to="/services/post_printer" className="sidenav_link">
            <span className="sidenav_subtext">Post Printer</span>
          </Link>
          <Link to="/services/ultimaker" className="sidenav_link">
            <span className="sidenav_subtext">Ultimaker</span>
          </Link>
          <Link to="/services/3dprinter" className="sidenav_link">
            <span className="sidenav_subtext">3D Printer</span>
          </Link>
          <Link to="/services/waste_disposal" className="sidenav_link">
            <span className="sidenav_subtext">Waste Disposal</span>
          </Link>
        </div>
        <Link
          to="/new"
          className={`sidenav_link ${
            location.pathname === "/new" ? "active" : ""
          }`}
        >
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
