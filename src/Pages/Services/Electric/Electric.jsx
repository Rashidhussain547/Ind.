import React from "react";
import imgS1 from "../../../assets/images/S-1.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./Electric.scss";
const Electric = () => {
  return (
    <>
      <SrvcNav/>
      <div className="container Service-main">
      <div className="row Service-main-title">
          <h2>Services / Electrical calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              TechCal performs calibration and testing on wide range of
              electrical instruments. Our state-of-art electrical calibration
              laboratory is designed to cater all your calibration needs for
              electrical instruments such as Multimeter, Ammeter, Voltmeter,
              Clamp meter, Insulation tester etc. We offer reliable and accurate
              calibration results with authentic calibration certificates for
              your electrical instruments.
            </p>
            <p>
              TechCal is registered with DAC (Dubai Accreditation Center) to
              meet IS0 17025. TechCal performs electrical calibration which is
              traceable through DCL, NPL, PTB, NIST or other international/
              national standards institutes to the International Systems of
              Units (SI) or to accepted intrinsic standards of measurement.
            </p>
            <p>
              TechCal delivers calibration for electrical instruments by using
              high quality master calibrator / reference standards and other
              calibration equipment and accessories manufactured by Fluke and
              other branded manufacturers to ensure that calibration results are
              authentic and accurate.
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS1} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <p>
              Our highly trained technicians and engineers offer custom
              calibration solutions, tailored to the precise needs of customers
              and follow the latest industry trends. At TechCal, we ensure that
              calibration on electrical instruments meets both the international
              standards and customer requirements.
            </p>
            <p>
              Technical Calibration Lab has specific documented calibration
              procedures for electrical equipment and instruments that are
              followed for each make and model of instrument to ensure that the
              calibration and testing is performed according to the OEM
              (Original Equipment Manufacturer) and international calibration
              standards.
            </p>
          </div>
          <div className="row">
            <div className="col col-lg-4 Service-points">
              <h5>Calibration Capabilities</h5>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Multimeter Analogue and Digital
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Voltmeter Analogue and Digital
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Ammeter Analogue and Digital
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Clamp meter</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Insulation Testers</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">Decade Resistance Box</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">DC power supply units</div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  High voltage test Equipments
                </div>
              </div>
              <div className="left-point">
                <span>
                  <i class="far fa-check-square"></i>
                </span>
                <div className="left-point-para">
                  Thermocouple / RTD Calibrators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Electric;
