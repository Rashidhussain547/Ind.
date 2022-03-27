import React from "react";
import "./About.scss";
import abImg from "../../assets/images/ab-i.jpg";
const About = () => {
  return (
    <>
      <div className="col col-lg-12 container About-main" id="About-main">
        <div className="row">
          <div className="col col-lg-6 About-mainLeft">
            <h1>Something About Us</h1>
            <p>
              Established in 2015, Technical Calibration and Standards
              Laboratory – TechCal is licensed under Sheikh Mohammed Bin Rashid
              Establishment for SME Development. TechCal is committed to
              delivering the premium quality of calibration, repair and
              certification services in UAE. TechCal is dedicated to rendering
              reliable calibration and repair services in different parameters
              including Electrical, Temperature, Pressure, Dimension, Torque,
              Valves, actuators(PICV), Lab Equipment, weighing scale, mass, Lux
              meters, Ultrasonic thickness gauges, Magnetic Yokes, UV & Lux
              Meters, X-ray, NDT Equipment, Time & Frequency, Optical
              tachometer, Surveying equipment(theodolite, total station) etc. to
              diverse range of industries that includes but not limited to
              Aviation, Marine, Automobile, Energy, Oil & Gas and Process
              Industries within UAE.
            </p>
            <p>
              <strong>
                TechCal is accredited with Emirates International Accreditation
                Center (EIAC, formerly DAC) to meet ISO/IEC/17025 in order to
                ensure a high level of calibration and quality standards.
                TechCal performs calibration which is traceable through NPL,
                NIST, PTB, EMI or other international/ national standards
                institutes to the International Systems of Units (SI) or to
                accepted intrinsic standards of measurement.
              </strong>
            </p>
            <p>TechCal is the authorized distributor of following international brands:</p>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Snap-On (USA) Authorized distributor, Service & Calibration Facility</div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Haefner (Germany) of Mass Standards and Standards Weights</div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Electron-X (UK) of X-rays cabinet, rooms & enclosures</div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Balteau NDT Authorized Service Centre of X-ray equipment</div>
            </div>
          </div>
          <div className="col col-lg-6 About-mainRight">
            <img src={abImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
