import React from "react";

import { useContext } from "react";

import { GlobalContext } from "../App";

function Tracker() {
  const { submitData, inputHandler, input, btnState, updateData } =
    useContext(GlobalContext);

  return (
    <div>
      <div className="track-main">
        <h2 className="text-center traker">Exercise Tracker</h2>
      </div>
      <div>
        <div className="container tasveer">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    name="name"
                    value={input.name}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputDescription"
                    className="form-label"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputDescription"
                    name="description"
                    value={input.description}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="selectingExc">Select Exercise</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="exrcise"
                    value={input.exrcise}
                    onChange={inputHandler}
                  >
                    <option selected>Select your excercise</option>
                    <option value="Running">Running</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Walking">Walking</option>
                    <option value="Hiking">Hiking</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="dates1" className="form-label">
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="dates1"
                    data-provide="datepicker"
                    className="form-control"
                    name="date"
                    value={input.date}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="dura1" className="form-label">
                    Duration (in minutes)
                  </label>
                  <input
                    type="number"
                    id="dura1"
                    className="form-control"
                    name="duration"
                    value={input.duration}
                    onChange={inputHandler}
                  />
                </div>
                {btnState ? (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitData}
                  >
                    Add Data
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={updateData}
                  >
                    Update
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
