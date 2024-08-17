import React from "react";
import "../../style/services/waste_disposal.css";
import disposal from "../../assets/pages/services/disposal/disposal1.png";
export const Waste_Disposal = () => {
  return (
    <div className="disposal_box">
      <div className="disposal_header">
        <div className="disposal_header_content">
          <p className="services_header_font">Waste Disposal</p>
          <img src={disposal}></img>
        </div>
      </div>
      <div className="disposal_instruction_box">
        <div className="disposal_instruction">
          <h3 className="disposal_instruction_header services_instruction_header">
            Waste Disposal Procedures:
          </h3>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              Hazardous Waste:
            </h3>
            <p>
              Dispose of hazardous waste in designated containers following
              safety protocols and guidelines provided by the makerspace. Do not
              mix different types of hazardous waste.
            </p>
          </div>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              3D Filament Recycling:{" "}
            </h3>
            <p>
              Place used 3D filament in the designated recycling bin for proper
              recycling.
            </p>
          </div>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              Vinyl Cutting Waste:
            </h3>
            <p>
              Collect vinyl cutting waste and dispose of it in the designated
              waste bin.
            </p>
          </div>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              Metal Waste and Screws:
            </h3>
            <p>
              Properly collect and dispose of waste generated from the laser
              cutter according to the makerspace's guidelines. Separate
              different types of waste as instructed.
            </p>
          </div>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              Spills:
            </h3>
            <p>
              In case of spills, use shop rags to clean up the mess. Dispose of
              the used shop rags in the appropriate waste container.
            </p>
          </div>
          <div className="disposal_instruction_steps">
            <h3 className="disposal_steps_header services_instruction_header">
              Used Batteries:
            </h3>
            <p>
              Place used batteries in the designated bin for proper disposal or
              recycling. Do not dispose of batteries in regular trash bins.
            </p>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
