import React from "react";
import video from "../videos/Treadmill - 77916.mp4";

function Section() {
  return (
    <div>
      <div className="container">
        <div className="row mamd">
          <div className="col-6">
            <video width="100%" height="100%" controls autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="col-6 sec0">
            <h2 className="sec1">Excercise to be fit and strong</h2>
            <p className="sec2">
              Transform Your Body, Transform Your Life: Get Moving with Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
