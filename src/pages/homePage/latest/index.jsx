import React from "react";
import "./index.scss";
const Latest = () => {
  return (
    <div id="latest">
      <div className="container">
        <div className="latest">
          <h1 className="latest-h1"> OUR LATEST BLOG</h1>
          <hr />
          <p className="latest-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type.
          </p>

          <div className="latest-cards">
            <div className="latest-card">
              <img
                className="latest-img"
                src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg"
              />

              <div className="latest-card-body">
                <h5 className="latest-card-title">
                  Playback: Akufo-Addo speaks to business community
                </h5>
                <div className="admin">
                  <p className="latest-card-text-1"> Posted by</p>
                  <p className="latest-card-text-2">admin</p>
                  <p className="latest-card-text-1">at 04 Feb, 2017</p>
                </div>

                <p className="latest-card-text-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan... Read More
                </p>
              </div>
            </div>

            <div className="latest-card">
              <img
                className="latest-img"
                src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg"
              />
              <div className="latest-card-body">
                <h5 className="latest-card-title">
                  Playback: Akufo-Addo speaks to business community
                </h5>
                <div className="admin">
                  <p className="latest-card-text-1"> Posted by</p>
                  <p className="latest-card-text-2">admin</p>
                  <p className="latest-card-text-1">at 04 Feb, 2017</p>
                </div>
                <p className="latest-card-text-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan... Read More
                </p>
              </div>
            </div>

            <div className="latest-card">
              <img
                className="latest-img"
                src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg"
              />
              <div className="latest-card-body">
                <h5 className="latest-card-title">
                  Playback: Akufo-Addo speaks to business community
                </h5>
                <div className="admin">
                  <p className="latest-card-text-1"> Posted by</p>
                  <p className="latest-card-text-2">admin</p>
                  <p className="latest-card-text-1">at 04 Feb, 2017</p>
                </div>
                <p className="latest-card-text-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis iaculis velit in tristique. Curabitur ac urna urna
                  sed accumsan... Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
