import React, { useContext } from "react";
import pic3 from "../images/blog-fitlife-102313.jpg";
import { GlobalContext } from "../App";

function Walkcard() {
  const { walking, deleteData, editData } = useContext(GlobalContext);
  return (
    <div>
      <div className="container run">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img id="pic3" src={pic3} className="card-img-top" alt="no " />
              <div className="card-body">
                <h5 className="card-title text-center gum">Walking</h5>
              </div>
            </div>
          </div>
          <div className="col-8">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Exercise</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {walking.map((obj, index) => (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.description}</td>
                    <td>{obj.exrcise}</td>
                    <td>{obj.date}</td>
                    <td>{obj.duration}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning hmHain"
                        onClick={() => editData(obj._id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger hmHain"
                        onClick={() => deleteData(obj._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary">Empty</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walkcard;
