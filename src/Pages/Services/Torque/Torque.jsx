import React from "react";
import imgS2 from "../../../assets/images/S-2.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./Torque.scss";
const Torque = () => {
  return (
    <>
      <SrvcNav/>
      <div className="container Service-main">
      <div className="row Service-main-title">
          <h2>Services / Torque calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              Technical Calibration Laboratory is an authorized calibration and
              service center for Snap-on Torque tools. TechCal has a
              well-developed facility for calibration of torque tools such as
              Torque Wrenches, Torque Meter, Torque Screwdriver, Torque Spanner,
              Torque Transducer etc.
            </p>
            <p>
              TechCal performs calibration for torque tools and instruments by
              using supreme quality master calibrator / reference standards
              manufactured by Snap-on International to ensure that calibration
              results are perfectly accurate. In addition to this, we have a
              complete documented system and procedure to calibrate torque
              tools, according to the Original Equipment Manufacturer (OEM) and
              the torque calibration is traceable to DCL, NPL, PTB, NIST or
              other international / national standards.
            </p>
            <p>
              We understand that the varying needs of our customers and changing
              industry trends, therefore we offer calibration services that are
              up to the international and national quality and calibration
              standards.
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS2} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <p>
              At TechCal, calibration for torque tools is performed by
              well-trained calibration technicians and engineers to produce
              highly accurate calibration results and generate comprehensive
              calibration certificates / reports – a perfect package to fulfill
              our customer calibration requirements.
            </p>
          </div>
          <div className="row">
            <div className="col col-lg-4 Service-points">
              <h5>Calibration Capabilities</h5>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Wrenches</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Preset Torque Wrench</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Screwdriver</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Spanners</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Transducer</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Tester</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Torque Indicator</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Pneumatic/Hydraulic Wrenches
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Torque;
