import React from "react";
import instron1 from "../../assets/pages/services/instron/instron1.png";
import instron2 from "../../assets/pages/services/instron/instron2.png";
import "../../style/services/instron.css";
export const Instron = () => {
  return (
    <div className="instron_box">
      <div className="instron_header">
        <div className="instron_header_content">
          <img src={instron1}></img>
          <p className="services_header_font">Instron</p>
        </div>
      </div>

      <div className="instron_instruction">
        <div className="instron_instruction_content">
          <div className="instron_test_description">
            <h3 className="instron_description_header services_instruction_header">
              TEST
            </h3>
            <p>
              In order to perform a tensile test, an operator must perform a
              variety of tasks to ensure that the test is being conducted in
              accordance with internal and/or external testing standards.
              Depending on the lab, these tasks might be partially or entirely
              automated, though responsibility for the correctness of the setup
              always resides with the operator.
            </p>
          </div>

          <div className="instron_test_description">
            <h3 className="instron_description_header services_instruction_header">
              TEST METHOD SELECTION
            </h3>
            <p>
              After you have loaded your specimen into the system and attached
              your extensometer, it is time to start your test. When setting up
              your test you will have selected the appropriate test method in
              your testing software and input any necessary parameters regarding
              test speed, specimen measurements, or end criteria. After you
              instruct the system to start, the machine will apply tensile force
              to your specimen as prescribed by the test method and record data
              as your specimen responds to the stress. After the test is
              complete the specimen can be removed and the data exported for
              further study.
            </p>
          </div>

          <div className="instron_test_description">
            <h3 className="instron_description_header services_instruction_header">
              PREPARING SPECIMENS
            </h3>

            <p>
              Pecimen geometries vary widely depending on the material being
              tested and the test method or standard being used. Governing
              bodies such as ASTM and ISO have standardized specimen
              requirements for different materials, which allows their
              properties to be reliably compared between different batches and
              manufacturers. <br></br>Tensile specimens are commonly machined or
              die cast in the shape of dogbones, which provide 'shoulders'
              designed to be held by the grips of the testing machine and a
              'gage length' where the tensile properties will be measured. The
              dimensions of these shoulders, the gage length between them, and
              the length and width of the entire specimen are all prescribed by
              the testing standard.
            </p>
          </div>
          <img src={instron2} className="instron_img"></img>
          <div className="instron_test_description">
            <h3 className="instron_description_header services_instruction_header">
              SERTING SPECIMEN INTO GRIPS
            </h3>

            <p>
              Depending on the dimensions and texture of the material, different
              grip types and jaw face surfaces may be required in order to
              successfully grip the specimens. Grips are available in a wide
              variety of force capacities and with rubber-coated, smooth,
              serrated, and other surface types. In order to ensure that force
              is applied in the correct direction, different alignment devices
              are available to assist operators when inserting a specimen into
              the grips.
            </p>
          </div>
          <div className="instron_test_description">
            <h3 className="instron_description_header services_instruction_header">
              STRAIN MEASUREMENT DEVICES
            </h3>
            <p>
              Strain is a measurement of a specimen's deformation under stress
              and is a basic part of materials characterization required by most
              testing standards. Strain measurement devices such as
              extensometers are typically used in order to take this
              measurement. Contacting devices such as clip-on extensometers are
              attached to the specimen after it has been placed in the grips.
            </p>
          </div>
        </div>
      </div>
      <div className="services_footer"></div>
    </div>
  );
};
