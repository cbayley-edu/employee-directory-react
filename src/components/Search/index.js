import React from "react";

export default function Search() {
  return (
    <div>
      <center>
        <div className="input-group input-group-lg w-25">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
            </div>
            <input type="text" className="form-control" placeholder="search box"></input>
        </div>
      </center>
      <br></br>
    </div>
  );
}
