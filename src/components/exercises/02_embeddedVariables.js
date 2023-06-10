import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const header = "M.SC. Enterprise Software Systems";
  const modules = [
    {
    name: "Cloud Architecture",
    noLectures: 2,
    noPracticals: 3
    }, 
    {
    name: "Enterprise Web Dev",
    noLectures: 2,
    noPracticals: 3
    }
  ];
  return (<div>
    <h2>{`${header} - Modules table`}</h2>
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
          <td>{modules[0].name}</td>
          <td>{modules[0].noLectures}</td>
          <td>{modules[0].noPracticals}</td>
        </tr>
        <tr>
          <td>{modules[1].name}</td>
          <td>{modules[1].noLectures}</td>
          <td>{modules[1].noPracticals}</td>
        </tr>
      </tbody>
    </table>
    </div>
);
};

export default Demo;
