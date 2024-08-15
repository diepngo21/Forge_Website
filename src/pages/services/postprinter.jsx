import React from "react";
import postprinter1 from "../../assets/postprinter1.png";
import postprinter2 from "../../assets/postprinter2.png";
import postprinter_qr from "../../assets/postprinter_qr.png";

import "../../style/services/postprinter.css";
import "../../style/index.css";

export const PostPrinter = () => {
  return (
    <div className="postprinter_box">
      <div className="postprinter_header_sec">
        <div className="postprinter_header_content">
          <img src={postprinter1} className="postprinter_header_sticker"></img>
          <p className="services_header_font">HP Poster Printer</p>
          <img src={postprinter1} className="postprinter_header_sticker"></img>
        </div>
      </div>
      <div className="postprinter_about_box">
        <div className="postprinter_about_content">
          <img src={postprinter2} className="postprinter_about_sticker"></img>
          <div className="postprinter_about_text">
            <p className="postprinter_about_description">
              Remember to exercise caution and follow safety guidelines when
              using the 3D Printers at The Chabot Forge!
            </p>
          </div>
        </div>
        <img src={postprinter_qr} className="services_qr postprinter_qr"></img>
      </div>
      <div className="postprinter_instruction_box">
        <div className="postprinter_instruction_content">
          <h3 className="services_instruction_header postprinter_instruction_header">
            Steps:
          </h3>
          <div className="services_instruction_steps">
            <p>1. Save the document on a USB thumb drive.</p>
            <p>2. Insert the USB drive into the printer.</p>
            <p>
              3. Navigate to the Files or USB Drive section on the control
              panel.
            </p>
            <p>4. Select the file you want to print.</p>
            <p>5. Adjust print settings, ensuring A0 paper size.</p>
            <p>6. Start the print job from the USB drive.</p>
            <p>7. Collect prints once the job is complete.</p>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
