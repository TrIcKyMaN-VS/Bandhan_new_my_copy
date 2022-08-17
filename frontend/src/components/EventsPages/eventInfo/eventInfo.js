import axios from "axios";
import React, { useEffect } from "react";

function EventInfo() {

    useEffect(() => {
        axios.get('api/eventInfo').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    },[])


  return (
    <div className=" mt-5 mb-5 ps-5 pe-5 ms-3 me-3 pb-5 pt-3">
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p class="fw-normal mb-1">Software engineer</p>
              <p class="text-muted mb-0">IT department</p>
            </td>
            <td>
              <span class="badge badge-warning rounded-pill d-inline">
                pending
              </span>
            </td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p class="fw-normal mb-1">Consultant</p>
              <p class="text-muted mb-0">Finance</p>
            </td>
            <td>
              {/* <span class="badge badge-primary rounded-pill d-inline">
                Onboarding
              </span> */}
              <span class="badge badge-warning rounded-pill d-inline">
                pending
              </span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p class="fw-normal mb-1">Designer</p>
              <p class="text-muted mb-0">UI/UX</p>
            </td>
            <td>
            <span class="badge badge-warning rounded-pill d-inline">
                pending
              </span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventInfo;
