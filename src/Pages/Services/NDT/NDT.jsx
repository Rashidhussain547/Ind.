import React from "react";
import imgS6 from "../../../assets/images/S-6.jpg";
import SrvcNav from "../../../Components/SrvcNav/SrvcNav";
import "./NDT.scss";
const NDT = () => {
  return (
    <>
      <SrvcNav />
      <div className="container Service-main">
      <div className="row Service-main-title">
          <h2>Services / NDT equipment calibration</h2>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <p>
              Here at TechCal, we are providing calibration services for NDT
              equipment/tools. In order to carry out non-destructive testing;
              you also need to ensure that the test equipment like thickness
              gauges, magnetic yokes etc. are functioning properly with
              precision and accuracy. To deliver traceability and test accuracy
              in the result, periodic calibration of NDT instruments must be
              carried out by using proper standards and OEM specifications.
            </p>
            <p>
              TechCal has fully qualified and highly trained engineers who are
              well experienced for the calibration of NDT equipment/tools that
              include but not limited to:
            </p>
          </div>
          <div className="col col-lg-6 Service-img">
            <img src={imgS6} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-4 Service-points">
            <h5>Calibration Capabilities</h5>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Thickness gauges</div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">Magnetic Yoke</div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">
                Magnetic Particle Inspection (MPI) Bench
              </div>
            </div>
            <div className="left-point">
              <span>
                <i class="far fa-check-square"></i>
              </span>
              <div className="left-point-para">
                Fluorescent Penetrant Inspection (FPI) Line
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NDT;
