import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = props => {
  const list = props.modules.map((module, index) => {
  return (
    <tr key={index}>
      {module.name}
    </tr>
  );
});
return (
  <>
   <h2>{props.course}</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No. Lectures</th>
          <th>No. Practicals</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  
  </>
);
};



export default Demo;
