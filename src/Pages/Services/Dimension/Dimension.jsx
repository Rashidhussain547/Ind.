import React from "react";
import imgS5 from "../../../assets/images/S-5.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./Dimension.scss";
const Dimension = () => {
  return (
    <>
      <SrvcNav/>
      <div className="container Service-main">
        <div className="row Service-main-title">
          <h2>Services / Dimension calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              Calibration Experts at TechCal offer you dimension calibration
              solutions for a wide range of dimensional tools such as vernier
              calipers and digital calipers, inside and outside micrometers,
              gauges, crimping tools etc.
            </p>
            <p>
              We understand our customers’ diverse needs for dimensional tools
              calibration. Therefore, we offer calibration services that are at
              par with the international and national standards, in order to
              satisfy our valuable customers in best possible way.
            </p>
            <p>
              At TechCal, we use high quality master calibrator / reference
              standards and other calibration equipment and accessories made by
              world leading manufacturers to ensure the precision and accuracy
              of calibration service
            </p>
            <p>
              Our engineers follow international or national calibration
              standards for dimension instruments calibration which can be
              traceable to DCL, NPL, PTB, NIST etc.
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS5} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <p>
              TechCal is registered with DAC (Dubai Accreditation) – Dubai
              Municipality to meet ISO 17025 quality and calibration standards
              in order to deliver equipment calibration services for dimension
              instruments.
            </p>
            <p>
              Technical Calibration Lab has specific documented calibration
              procedures for dimension instruments that are practiced for each
              make and model of tool to make sure that the calibration is
              performed according to the OEM (Original Equipment Manufacturer)
              and international calibration standards.
            </p>
          </div>
          <div className="row">
            <div className="col col-lg-4 Service-points">
              <h5>Calibration Capabilities</h5>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Vernier Caliper & Digital Caliper</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Inside and Outside Micrometers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Dial Indicators</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Thickness Gauges
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Height Gauges</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Depth Gauges</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Depth Micrometer
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                Crimping Tools
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dimension;
