import React from "react";
import Emp from "./EmpDetails.json"
function Employee()
{
    return (
    <div>
        <h3>List of Employees</h3>
        <hr></hr>

        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h3>Photo</h3>
            </div>
            <div className="col-md-2">
              <h3>ID</h3>
            </div>
            <div className="col-md-2">
              <h3>Name</h3>
            </div>
            <div className="col-md-2">
              <h3>Designation</h3>
            </div>
            <div className="col-md-2">
              <h3>Age</h3>
            </div>
            <div className="col-md-2">
              <h3>Score</h3>
            </div>
          </div>
        </div>
        <hr></hr>
        {Emp.map((record, i) => (
          <div key={i}>
            {/* <img src={record.path}  /> */}
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <img src={record.icon} width="50px" height="50px" />
                </div>
                <br></br>
                <div className="col-md-2">{record.id}</div>
                <div className="col-md-2">{record.Name}</div>
                <div className="col-md-2">{record.Designation}</div>
                <div className="col-md-2">{record.Age}</div>
                <div className="col-md-2">{record.Score}</div>
              </div>
              <hr></hr>
            </div>
          </div>
        ))}
        

    </div> 
    )
}

export default Employee;