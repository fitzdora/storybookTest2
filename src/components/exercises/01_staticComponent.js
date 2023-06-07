import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>M.SC. Enterprise Software Systems - Modules table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No. Lectures</th>
            <th>No. Practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cloud Architecture</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Enterprise Web Dev</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      </div>
  );
};

export default Demo;
