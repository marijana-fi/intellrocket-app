import React from "react";
import Button from "../utils/button/Button";
import "./positions.scss";
import { Link } from "react-router-dom";

function Positions({ jobPath = "marketing-manager" }) {
  return (
    <section id="job-list" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h3>Positions Available</h3>
            <div className="job-wrap d-flex ">
              <div className="info-wrap">
                <h4>Marketing Manager</h4>
                <p>Belgrade/ Full Time</p>
              </div>
              <Link to={`/intellrocket-app/careers/${jobPath}`}>
                <Button name="btn btn-static" label="More Details" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Positions;
