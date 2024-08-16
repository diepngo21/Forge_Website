import React from "react";
import microscope_sticker from "../../assets/pages/services/microscope/microscope1.png";
import microscope2 from "../../assets/pages/services/microscope/microscope2.png";

import microscope_qr from "../../assets/pages/services/microscope/microscope_qr.png";
import "../../style/services/microscope.css";

export const Microscope = () => {
  return (
    <div className="micro_box">
      <div className="micro_header">
        <div className="micro_header_content">
          <p className="services_header_font">Keyence Digital Microscope</p>
          <img
            src={microscope_sticker}
            className="microscope_header_sticker"
          ></img>
        </div>
      </div>
      <div className="micro_instruction_box">
        <div className="micro_instruction">
          <div className="micro_instruction_steps">
            <img
              src={microscope2}
              className="micro_header_sticker  micro_sticker_left micro_sticker_first"
            ></img>
            <p>
              1. Press on the power button at the front of the microscope to
              turn it on
            </p>
            <img
              src={microscope2}
              className="micro_header_sticker micro_sticker_right micro_sticker_first micro_sticker_turn"
            ></img>
          </div>
          <hr className="micro_hr"></hr>
          <p>
            2. Use the focus knob to bring the sample into focus; use large
            focus first,<br></br> then finer focus, using the knobs
          </p>
          <hr className="micro_hr"></hr>
          <div className="micro_instruction_steps ">
            <img
              src={microscope2}
              className="micro_header_sticker micro_sticker_turn micro_sticker_left micro_sticker_second"
            ></img>

            <p>
              3. Use the zoom knob to adjust the magnification of the sample.
            </p>

            <img
              src={microscope2}
              className="micro_header_sticker micro_sticker_right"
            ></img>
          </div>
          <hr className="micro_hr"></hr>

          <p>4. Press the capture button to take a picture of the sample.</p>
          <hr className="micro_hr"></hr>
          <div className="micro_instruction_steps">
            <img
              src={microscope2}
              className="micro_header_sticker micro_sticker_left"
            ></img>
            <p>
              5. Save the image to the connected computer or external storage
              device.
            </p>

            <img
              src={microscope2}
              className="micro_header_sticker micro_sticker_right micro_sticker_turn"
            ></img>
          </div>

          <hr className="micro_hr"></hr>

          <p>6. Press power button to turn off the microscope when finished.</p>
        </div>
      </div>
      <div className="micro_footer services_footer">
        <p className="micro_footer_text">
          Scan QR code for detailed instructions
        </p>
        <img src={microscope_qr} className="postprinter_qr"></img>
      </div>
    </div>
  );
};
