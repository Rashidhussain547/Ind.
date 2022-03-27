import React from "react";
import "./Team.scss";
import teamimg1 from "../../assets/images/t-1.jpg";
import teamimg2 from "../../assets/images/t-2.jpg";
import teamimg3 from "../../assets/images/t-3.jpg";
import teamimg4 from "../../assets/images/t-4.jpg";

const Team = () => {
  return (
    <>
      <div className="teams" id="Team">
        <div className="team-main col col-lg-12 col-md-6 container">
          <div className="row">
            <div className="col col-lg-3">
              <div className="card">
                <img src={teamimg1} alt="" />
                <div className="card-body">
                  <h5>Geoffrey Smith</h5>
                  <span>SEO MANAGER</span>
                  <p>
                    Lorem Ipsum is simply dummy text ofering thetonat sunrising
                    printing
                  </p>
                  <div className="s-icons">
                    <a href="#!">
                      <i class="fas fa-rss"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="card">
                <img src={teamimg2} alt="" />
                <div className="card-body">
                  <h5>Shari Weber</h5>
                  <span>GRAPHIC DESIGNER</span>
                  <p>
                    Lorem Ipsum is simply dummy text ofering thetonat sunrising
                    printing
                  </p>
                  <div className="s-icons">
                    <a href="#!">
                      <i class="fas fa-rss"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="card">
                <img src={teamimg3} alt="" />
                <div className="card-body">
                  <h5>Dean Tignor</h5>
                  <span>SOCIAL AGENT</span>
                  <p>
                    Lorem Ipsum is simply dummy text ofering thetonat sunrising
                    printing
                  </p>
                  <div className="s-icons">
                    <a href="#!">
                      <i class="fas fa-rss"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="card">
                <img src={teamimg4} alt="" />
                <div className="card-body">
                  <h5>Paul Goto</h5>
                  <span>PR MANAGER</span>
                  <p>
                    Lorem Ipsum is simply dummy text ofering thetonat sunrising
                    printing
                  </p>
                  <div className="s-icons">
                    <a href="#!">
                      <i class="fas fa-rss"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
