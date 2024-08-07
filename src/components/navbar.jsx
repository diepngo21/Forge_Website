import React, { useState } from "react";
import "../style/components/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (event) => {
    event.preventDefault();
    navigate("/", { state: { scrollToContact: true } });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav_menu ${isMenuOpen ? "active" : ""}`}>
        <li className="Home">
          <Link to="*" className="nav_text">
            Home
          </Link>
        </li>
        <div className="nav_option">
          <li>
            <Link to="/safety" className="nav_text">
              Safety & Registration
            </Link>
          </li>
          <li>
            <Link to="#" className="nav_text service ">
              Services
            </Link>
            <ul className="subnav">
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/3dprinter"
                >
                  3D Printer
                </Link>
              </li>
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/post_printer"
                >
                  Post Printers
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/laser_cutter"
                >
                  Laser Cutter
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/ankermake"
                >
                  AnkerMake
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/waste_disposal"
                >
                  Waste Disposal
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/ultimaker"
                >
                  Ultimaker
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/keyence_digital_microscope"
                >
                  Keyence Digital Microscope
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/instron"
                >
                  Instron
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/new" className="nav_text">
              News
            </Link>
          </li>
          <li>
            <a
              href="#contact_sec"
              className="nav_text"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
        </div>
        <div className="toggle_btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseSharp className="mobile_menu nav_text close_menu" />
          ) : (
            <IoMdMenu className="mobile_menu nav_text open_menu" />
          )}
        </div>

        {/* RESPONSIVE MENU FOR MOBILE */}

        <div className={`mobile_dropdown ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/safety" className="nav_text">
              Safety & Registration
            </Link>
          </li>
          <li>
            <Link to="/new" className="nav_text">
              News
            </Link>
          </li>
          <li>
            <a
              href="#contact_sec"
              className="nav_text"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
          <li>
            <Link to="#" className="nav_text service ">
              Services
            </Link>
            <ul className="subnav">
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/3dprinter"
                >
                  3D Printer
                </Link>
              </li>
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/post_printer"
                >
                  Post Printers
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/laser_cutter"
                >
                  Laser Cutter
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/ankermake"
                >
                  AnkerMake
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/waste_disposal"
                >
                  Waste Disposal
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/ultimaker"
                >
                  Ultimaker
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/keyence_digital_microscope"
                >
                  Keyence Digital Microscope
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="subnav_menu subnav_text"
                  to="/services/instron"
                >
                  Instron
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  );
};
