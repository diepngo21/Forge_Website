import React from "react";
import anker1 from "../../assets/pages/anker&laser_sticker.png";
import "../../style/services/ankermake.css";
import anker_qr from "../../assets/pages/services/ankermake/anker_qr.png";
import anker2 from "../../assets/pages/services/ankermake/anker2.png";

export const AnkerMake = () => {
  return (
    <div className="anker_box">
      <div className="anker_header">
        <div className="anker_header_content services_header_font">
          <p>3D Printer Anker</p>
          <img src={anker1}></img>
        </div>
      </div>
      <div className="anker_about">
        <div className="anker_about_content">
          <p>
            Remember to exercise caution when using the 3D Printers and follow
            the guidelines to ensure your safety and the integrity of your
            prints. Scan the QR Code for more details.
          </p>
          <img src={anker_qr}></img>
        </div>
      </div>
      <div className="anker_instruction">
        <div className="anker_instruction_content">
          <p className="anker_instruction_header services_instruction_header">
            Steps:
          </p>
          <div className="anker_instruction_text">
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
            <img src={anker2} className="anker_sticker"></img>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
