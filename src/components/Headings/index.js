import React from "react";
import "./style.css";

export default function Headings(props) {
  return (
    <div>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col">User Name</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
      </table>
    </div>
  );
}
