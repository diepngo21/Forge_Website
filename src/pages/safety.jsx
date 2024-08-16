import React from "react";
import "../style/pages/safety.css";
import safety1 from "../assets/pages/safety/safety1.png";
import safety2 from "../assets/pages/safety/safety2.png";
import safety3 from "../assets/pages/safety/safety3.png";
import safety4 from "../assets/pages/safety/safety4.png";

export const Safety = () => {
  return (
    <>
      <div className="safety_box">
        <div className="safety_header_sec">
          <div className="safety_header_content">
            <p className="safety_header_text">Safety and Liability</p>
            <img src={safety1} className="safety_sticker"></img>
          </div>
          <hr className="hr_safety_header"></hr>
        </div>
        <div className="safety_content_sec">
          <div className="liabilities">
            <div className="safety_content_header">
              <p className="safety_content_header_text">Liabilities</p>
              <p> Please fill this form out before coming to the Forge:</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuAYcAocWsEa1W7a0CNMJMPifUvCIf0mQOzCQvc7pwOXGy6A/viewform">
                Safety and Liability Form Link
              </a>
            </div>
            <div className="safety_page_setup ">
              <div className="safety_content_box liabilities_content_box ">
                <p className="safety_content_text">
                  Engaging in hands-on activities inherently involves risks. As
                  a member, you acknowledge these risks and voluntarily assume
                  responsibility for any potential injuries or damage that may
                  occur during your participation.
                </p>
              </div>
              <div className="safety_content_box liabilities_content_box">
                <p className="safety_content_text">
                  Ensure that you are familiar with the proper usage of tools
                  and equipment before engaging in any activity. Misuse or lack
                  of understanding may increase the risk of accidents and
                  liabilities.
                </p>
              </div>
              <div className="safety_content_box liabilities_content_box">
                <p className="safety_content_text">
                  Promptly report any accidents, injuries, or damage to
                  equipment to staffs. Timely reporting helps us address
                  concerns and take appropriate measures to maintain a safe
                  environment.
                </p>
              </div>
            </div>
          </div>
          <hr className="hr_safety_content"></hr>
          <div className="safety">
            <div className="safety_content_header">
              <p className="safety_content_header_text">
                Safety considerations
              </p>
            </div>
            <div className="safety_page_setup">
              <div className="safety_content_box safety_box_flex">
                <img src={safety2} className="safety_content_img"></img>

                <p className="safety_content_text">
                  Proper training on equipment and tools to prevent accidents,
                  members will encounter a QR code infront or near by the
                  equipment that they want to use, after scanning the coe they
                  will be redirected to our website where they can find
                  information and some videos of how to use the equipment.
                </p>
              </div>
              <div className="safety_content_box safety_box_flex">
                <ul className="safety_content_text">
                  <img src={safety3} className="safety_content_img"></img>
                  <li>
                    Open flames, such as candles or any other sources of direct
                    fire, are strictly prohibited within the makerspace. This
                    includes the use of matches and lighters.
                  </li>
                  <li>
                    If you notice potential fire hazards, damaged equipment, or
                    faulty wiring, report it to staff immediately. Your
                    vigilance contributes to a safer environment for everyone.
                  </li>
                </ul>
              </div>
              <div className="safety_content_box safety_box_flex">
                <ul className="safety_content_text">
                  <img src={safety4} className="safety_content_img"></img>

                  <li>
                    Always wear appropriate eye protection when working with
                    tools, machines, or any process that may pose a risk to your
                    eyes. Safety glasses or goggles are mandatory in designated
                    areas.
                  </li>
                  <li>
                    Use gloves suitable for the specific task you are
                    performing. Gloves provide protection against cuts,
                    abrasions, and exposure to potentially harmful substances.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="safety_footer_sec">
          <div className="safety_footer_content">
            <p>
              Besides that, our staff is always happy to help and teach how to
              use the <br></br> equipment that we hold ;D
            </p>
            <p>
              Also, please read the Safety
              <a
                href="https://introtoengineering.notion.site/Safety-Policies-and-Procedures-210004d0204b480993c6558c878f60d2"
                className="space"
              >
                Policies and Procedures
              </a>
              on our wiki page before <br></br>using machines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
