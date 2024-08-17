import React from "react";
import "../../style/services/printer.css";
import printer_qr from "../../assets/pages/services/printer/3dprinter_qr.png";
import printer from "../../assets/pages/services/printer/3dprinter.png";
export const Printer = () => {
  return (
    <div className="printer_box">
      <div className="printer_header_sec">
        <div className="printer_header_content">
          <div className="printer_header">
            <p className="services_header_font">3D Printing MakerBot</p>
            <img src={printer} className="printer_sticker"></img>
          </div>
        </div>
      </div>
      <div className="printer_about_box">
        <div className="printer_about_content">
          <p className="printer_about_text">
            Remember to exercise caution when using the 3D Printers <br></br>and
            follow the guidelines to ensure your safety and the <br></br>{" "}
            integrity of your prints. Scan the QR Code for more <br></br>{" "}
            details.
          </p>
          <img src={printer_qr} className="services_qr"></img>
        </div>
      </div>
      <div className="printer_instruction_box">
        <div className="printer_instruction">
          <div className="printer_instruction_content">
            <h3 className="printer_instruction_header services_instruction_header">
              For Printing with SD Card or USB:
            </h3>
            <div className="services_instruction_steps">
              <p>
                1. Prepare Model: Design or download a 3D model in a compatible
                format (like .STL or .OBJ).
              </p>
              <p>
                2. Use slicing software to convert the 3D model into printable
                layers.
              </p>
              <p>3. Save the sliced file on an SD card or USB drive.</p>
              <p>
                4. Turn on the printer, ensure it's calibrated, and check the
                build plate.
              </p>
              <p>
                5. Put the filament into the printer following instructions.
              </p>
              <p>
                6. Insert SD card or USB, choose the file, adjust settings if
                needed, and start printing.
              </p>
              <p>
                7. Watch the print progress and, once done, carefully take off
                the print.
              </p>
            </div>
          </div>
        </div>
        <div className="printer_instruction_content">
          <h3 className="printer_instruction_header services_instruction_header">
            For Cloud-Based Printing:
          </h3>
          <div className=" services_instruction_steps">
            <p>1. Design or get a 3D model in a compatible format.</p>
            <p>
              2. Use MakerBot's cloud software to upload and prepare the model.
            </p>
            <p>3. Adjust print settings using the cloud software.</p>
            <p>4. Pick your MakerBot printer from the list.</p>
            <p>5. Initiate the print job through the cloud software.</p>
            <p>
              6. Keep an eye on the progress, and once done, safely remove the
              print.
            </p>
          </div>
        </div>
        <div className="services_footer">
          <h3 className="printer_footer_content">
            Remember to follow safety guidelines provided by MakerBot and the
            instructions of the chosen method.
          </h3>
        </div>
      </div>
    </div>
  );
};
