import React from "react";
import "./index.scss";
const Meet = () => {
  return (
    <div id="meet">
      <div className="container">
        <div className="meet">
          <h1 className="meet-h1"> MEET OUT TEAM</h1>
          <hr />
          <p className="meet-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type.
          </p>

          <div className="meet-cards">
            <div className="meet-card">
              <img
                className="meet-img"
                src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg"
              />

              <div className="meet-card-body">
                <h4 className="meet-card-title">Gonzalez Gina</h4>
                <p className="meet-card-text">Web Developer</p>
              </div>
            </div>

            <div className="meet-card">
              <img
                className="meet-img"
                src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg"
              />
              <div className="meet-card-body">
                <h4 className="meet-card-title">Holly Vincenzini</h4>
                <p className="meet-card-text">Media Partner</p>
              </div>
            </div>

            <div className="meet-card">
              <img
                className="meet-img"
                src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg"
              />
              <div className="meet-card-body">
                <h4 className="meet-card-title">Ramirez Minita</h4>
                <p className="meet-card-text">Graphic Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
