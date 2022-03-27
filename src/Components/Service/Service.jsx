import React from "react";
import "./Service.scss";
import srcvImg1 from "../../assets/images/s-1.PNG";
import srcvImg2 from "../../assets/images/s-2.PNG";
const Service = () => {
  return (
    <>
      <div
        className="srvc-main container-fluid col col-lg-12 col-md-6"
        id="Service"
      >
        <div className="row servc-1">
          <div className="srvc-1-img col-lg-6 col-md-12">
            <img src={srcvImg1} alt="" />
          </div>
          <div className="srvc-1-dscrpt col-lg-6 col-md-12">
            <h1>Our Mission</h1>
            <p>
              We are committed to providing the best customer experience by
              delivering high quality and cost-effective calibration,
              certification, and repair solutions while meeting international
              calibration and quality standards. We strongly believe in
              continuous improvement in our technical and management processes,
              and the development of our dedicated human capital. We always
              strive to satisfy our stakeholders, create sustainable growth and
              profitability.
            </p>
            <button className="srvc-btn">See more</button>
          </div>
        </div>
        <div className="row">
          <div className="srvc-2-dscrpt col-lg-6 col-md-12">
            <h1>Our Vission</h1>
            <p>
              We aspire to be recognized as the most reliable and preferred
              calibration company in UAE. We aim to be known as the most
              competitive value-added calibration facility in the region.
            </p>
            <button className="srvc-btn">See more</button>
          </div>
          <div className="srvc-2-img col-lg-6 col-md-12">
            <img src={srcvImg2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
