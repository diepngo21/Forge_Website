import React from "react";
import "../../style/services/ultimaker.css";
import ultimaker1 from "../../assets/pages/services/ultimaker/ultimaker1.png";
import ultimaker2 from "../../assets/pages/services/ultimaker/ultimaker2.png";
import ultimaker_qr from "../../assets/pages/services/ultimaker/ultimaker_qr.png";

export const Ultimaker = () => {
  return (
    <div className="ultimaker_box">
      <div className="ultimaker_header">
        <div className="ultimaker_header_content">
          <img src={ultimaker2}></img>

          <p className="services_header_font">3D Printer Ultimaker</p>
          <img src={ultimaker1}></img>
        </div>
      </div>
      <div className="ultimaker_about">
        <div className="ultimaker_about_content">
          <p>
            Note: It is important to follow all safety instructions and
            guidelines provided by the manufacturer while operating the
            UltiMaker S5 3D printer.
          </p>
          <img src={ultimaker_qr}></img>
        </div>
      </div>
      <div className="ultimaker_instruction">
        <div className="ultimaker_instruction_content">
          <p className="ultimaker_instruction_header services_instruction_header">
            Steps:
          </p>
          <div className="ultimaker_instruction_text services_instruction_steps">
            <div>
              <p>1. Make sure there is filament loaded in the printer.</p>
              <p>
                2. Insert the USB with your sliced file of the 3D model you want
                to use.
              </p>
              <p>3. Navigate to the print settings on the printer’s display</p>
              <p>
                4. Select the desired print file from the available options.
              </p>
              <p>
                5. Adjust any print settings, such as print speed or layer
                height, if necessary.
              </p>

              <p>6. Start the printing process.</p>

              <p>
                7. Once the print is complete, carefully remove the printed
                object from the build plate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
