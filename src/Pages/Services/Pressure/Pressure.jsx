import React from "react";
import imgS3 from "../../../assets/images/S-3.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./Pressure.scss";
const Pressure = () => {
  return (
    <>
      <SrvcNav/>
      <div className="container Service-main">
      <div className="row Service-main-title">
          <h2>Services / Pressure calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              Calibration of Pressure gauges and associated instruments need to
              be periodically calibrated as per the international or national
              standard to ensure the safety and quality of equipment or the
              application for which it is to be used. Our services in pressure
              calibration include pressure gauge calibration, pressure indicator
              calibration, manometer calibration, vacuum gauge calibration,
              pressure transducer calibration, pressure transmitter calibration
              etc.
            </p>
            <p>
              Our highly trained calibration technicians and engineers perform
              calibration for pressure instruments by using high quality master
              calibrator / reference standards and other calibration equipment
              and accessories manufactured by Additel, WIKA and other branded
              manufacturers to ensure that calibration results are authentic and
              reliable.
            </p>
            <p>
              At TechCal, we follow international or national calibration
              standards for pressure instruments calibration which can be
              traceable to DCL, NPL, PTB, NIST etc. TechCal is registered with
              DAC (Dubai Accreditation) to meet ISO 17025 quality and
              calibration standards to produce equipment calibration services
              for pressure instruments.
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS3} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <p>
              Technical Calibration Lab has specific documented calibration
              procedures for pressure instruments that are practiced for each
              make and model of instrument to ensure that the calibration and
              testing is performed according to the OEM (Original Equipment
              Manufacturer) and international calibration standards.
            </p>
          </div>
          <div className="row">
            <div className="col col-lg-4 Service-points">
              <h5>Calibration Capabilities</h5>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Pressure Gauge</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Pressure Indicator</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Vacuum Gauge</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Test Gauge</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Compound Gauge</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Manometer</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Pressure Relief Valve</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Pressure Transducer</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Vacuum Transducer</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Pressure Transmitter</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Deadweight tester</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Pneumatic / Hydraulic Calibrators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pressure;
