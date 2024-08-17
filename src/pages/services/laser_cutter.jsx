import React from "react";
import "../../style/services/lasercutter.css";
import laser1 from "../../assets/pages/anker&laser_sticker.png";
import laser2 from "../../assets/pages/services/laser_cutter/laser2.png";

export const Laser = () => {
  return (
    <div className="laser_box">
      <div className="laser_header">
        <div className="laser_header_content">
          <img src={laser2} className="laser_img2"></img>
          <h3 className="services_header_font">Laser Cutter</h3>
          <img src={laser1} className="laser_img1"></img>
        </div>
      </div>
      <div className="laser_content">
        <div className="laser_about">
          <div className="laser_about_content">
            <p>
              Warning: The Uncovered Laser of the XTool M1 is categorized as a
              Class 4 Laser. These lasers are powerful and pose serious risks.
              Class 4 lasers can cause eye and skin injuries, and they have the
              potential to ignite flammable materials. Exercise caution when
              operating the XTool M1 and strictly adhere to safety guidelines.
              Ensure the integrity of the machine and only operate with the
              cover lid closed. Only authorized and trained personnel should
              operate the XTool M1. Failure to follow safety protocols may
              result in severe harm.
            </p>
            <hr className="services_instruction_header laser_hr"></hr>
            <p>
              For all processes on the Xtool M1 Laser Engraver and Vinyl Cutter
              follow these steps:
            </p>

            <p>
              1. Use the USB cable to connect your device to a computer with
              xTool Creative Space installed.
            </p>
            <p>
              2. Open XCS, click Connect Device, and select your device to
              connect, the connection is successful when the indicator turns
              blue
            </p>
          </div>
        </div>
        <div className="laser_instruction">
          <div className="laser_instruction_content">
            <div className="laser_cut_instruction laser_materials">
              <h3 className="services_instruction_header laser_instruction_header">
                For a Laser Cut:{" "}
              </h3>
              <p>
                1. Place triangular prisms on the baseplate of the xTool to
                adequately support the material you are working on.
              </p>
              <p>
                2. Close the lid or click on photograph to refresh the image.
              </p>
              <p>
                3. Set the processing type to Laser Flat and ensure the image is
                aligned properly.
              </p>
              <p>
                4. Import your desired image through file {">"} import image or
                insert a shape
              </p>
              <p>5. Select which material is being processed.</p>
              <p>
                6. Set the raised height to Triangular Prism and select Cut.
              </p>
              <p>
                7. Click Start and click Framing to see whether the area that is
                being processed is on the material.
              </p>
              <p>
                8. Press the button on the xTool M1 to begin processing. Do not
                open the lid during processing.
              </p>
              <p>
                9. Adjust the framed area or proceed by clicking send to send
                the file to the M1.
              </p>
              <p>
                10. Press the button on the xTool M1 to begin processing. Do not
                open the lid during processing.
              </p>
              <p>
                11. When the process is done, remove your material and store the
                triangular prisms.
              </p>
            </div>
            <div className="blade_cut_instruction laser_materials">
              <h3 className="services_instruction_header laser_instruction_header">
                For a Blade Cut:{" "}
              </h3>
              <p>
                1. Place the appropriate mat on the baseplate of the xTool to
                protect the blade and to secure the material you are working on.
              </p>
              <p>
                2. Close the lid or click on photograph to refresh the image.
              </p>
              <p>
                3. Set the processing type to Blade Cut and ensure the image is
                aligned properly.
              </p>
              <p>
                4. Insert a shape or import a file through file {">"} import
                image.
              </p>
              <p>5. Select which material is being used.</p>
              <p>
                6. Click Start and click Framing to see whether the area that is
                being processed is on the material.
              </p>
              <p>
                7. Press the button on the xTool M1 to begin processing. Do not
                open the lid during processing.
              </p>
              <p>
                8. Adjust the framed area or proceed by clicking send to send
                the file to the M1.
              </p>
              <p>
                9. Press the button on the xTool M1 to begin processing. Do not
                open the lid during processing.
              </p>
              <p>
                10. When the process is done, remove your material and store and
                clean the mat.
              </p>
            </div>
            <div className="print_blade_instruction laser_materials">
              <h3 className="services_instruction_header laser_instruction_header">
                For a Print and Blade Cut (Stickers):{" "}
              </h3>

              <p>
                1. Place the appropriate mat on the baseplate of the xTool to
                protect the blade and to secure the material you are working on.
              </p>
              <p>
                2. Close the lid or click on photograph to refresh the image.
              </p>
              <p>
                3. Set the processing type to Print and Blade Cut and ensure the
                image is aligned properly.
              </p>
              <p>
                4. Click on Image or choose File {">"} Import image to import
                the pattern you want to use.
              </p>
              <p>5. Add an outline for the pattern to be cut with the M1.</p>
              <p>
                6. Click Process and load the printer you will be printing to.
              </p>
              <p>
                7. Click Print to transfer the pattern onto the material you are
                working on.
              </p>
              <p>
                8. Place the material on the cutting mat and align the cutting
                mat as instructed by XCS.
              </p>
              <p>
                9. Click Framing to ensure the alignment of your material and
                the cut that will be preformed.
              </p>
              <p>
                10. Click Start and press the button on the xTool M1 to begin
                processing. Do not open the lid during processing.
              </p>
              <p>
                11. When the process is done, remove your material and store and
                clean the mat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
