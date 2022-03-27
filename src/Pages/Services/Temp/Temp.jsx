import React from "react";
import imgS4 from "../../../assets/images/S-4.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./Temp.scss";
const Temp = () => {
  return (
    <>
     <SrvcNav/>
      <div className="container Service-main">
      <div className="row Service-main-title">
          <h2>Services / Temperature calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              We at TechCal deliver calibration for temperature devices such as
              thermometers, IR thermometers, thermo hygrometers, human body
              thermometers, temperature indicators, probes, ovens, freezers,
              chillers, human body temperature devices etc. to an international
              or national standard to ensure premium quality of temperature
              calibration and customer satisfaction. In order to meet your
              custom needs, we offer precise and accurate calibration solutions
              with authentic calibration certificates for your temperature
              devices.
            </p>
            <p>
              Technical Calibration Laboratory has detailed documented
              calibration procedures for temperature devices and instruments for
              each make and model of device to ensure that the calibration and
              testing is done according to the OEM (Original Equipment
              Manufacturer) and international calibration standards.
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS4} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <p>
              TechCal is registered with DAC (Dubai Accreditation Center) to
              meet IS0 17025. TechCal performs temperature calibration,
              traceable through DCL, NPL, PTB, NIST or other international /
              national standards.
            </p>
          </div>
          <div className="row">
            <div className="col col-lg-4 Service-points">
              <h5>Calibration Capabilities</h5>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Digital Thermometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Dial Thermometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">AGlass Thermometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Infrared Thermometers (IR Thermometers)
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Thermo Hydrometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Human Body Thermometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Temperature Controller / indicators
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  RTD’s, T/C’s (Thermocouples)
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Drying Ovens
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Freezers, Chillers
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Other Human Body Temperature Devices
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Temp;
