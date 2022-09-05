import React, { useState, useEffect } from "react";
import axios from "axios";

function Orderslist(props) {
  const forms = props.formdata;
  const [datapoints, setdatapoints] = useState("");
  const [updtBtn, setUpdtBtn] = useState(true);
  const [datavoucher, setdatavoucher] = useState("");
  const [postInfo, setPostInfo] = useState("");

  const [honeymoon, setHoneymoon] = useState(false);
  const [honeymoonReas, setHoneymoonReas] = useState(null);
  const [honeymoonstats, setHoneymoonstats] = useState(null);
  const [honeymoonConf, setHoneymoonConf] = useState(null);
  const [honeymoonPromiseDat, setHoneymoonPromiseDate] = useState(null);

  const [muh_Dikhai, setMuh_Dikhai] = useState(false);
  const [muh_DikhaiReas, setmuh_DikhaiReas] = useState(null);
  const [muh_Dikhaistats, setmuh_Dikhaistats] = useState(null);
  const [muh_DikhaiConf, setmuh_DikhaiConf] = useState(null);
  const [muh_DikhaiPromiseDat, setmuh_DikhaiPromiseDate] = useState(null);

  const [subaarambhYatra, setSubaarambhYatra] = useState(false);
  const [subaarambhYatraReas, setsubaarambhYatraReas] = useState(null);
  const [subaarambhYatrastats, setsubaarambhYatrastats] = useState(null);
  const [subaarambhYatraConf, setsubaarambhYatraConf] = useState(null);
  const [subaarambhYatraPromiseDat, setsubaarambhYatraPromiseDate] =
    useState(null);

  useEffect(() => {
    axios
      .get(`api/adminuserlist/babyshowerpointsvoucher/${forms[0].userId}`)
      .then((res) => {
        setdatapoints(res.data[0].points);
        setdatavoucher(res.data[0].voucher);
      });

    axios
      .get(`api/postwedding/postweddingInfo/${forms[0].orderId}`)
      .then((res) => {
        // setdatapoints(res.data[0].points)
        // setdatavoucher(res.data[0].voucher)
        // console.log(res.data[0]);
        setPostInfo(res.data[0]);
        if (res.data[0].honeymoonConfirmation) {
          setHoneymoonReas(res.data[0].honeymoonReason);
          setHoneymoonConf(res.data[0].honeymoonConfirmation);
          setHoneymoonPromiseDate(res.data[0].honeymoonPromiseDate);
          setHoneymoonstats(res.data[0].honeymoonstatus);
          if (res.data[0].honeymoonConfirmation.length > 4) {
            setHoneymoon(true);
          } else {
            setHoneymoon(false);
          }
        }
        // console.log(res.data[0].muh_DikhaiConfirmation);

        if (
          // res.data[0].muh_DikhaiReason ||
          res.data[0].muh_DikhaiConfirmation
          // res.data[0].muh_DikhaiPromiseDate ||
          // res.data[0].muh_Dikhaistatus
        ) {
          setmuh_DikhaiReas(res.data[0].muh_DikhaiReason);
          setmuh_DikhaiConf(res.data[0].muh_DikhaiConfirmation);
          setmuh_DikhaiPromiseDate(res.data[0].muh_DikhaiPromiseDate);
          setmuh_Dikhaistats(res.data[0].muh_Dikhaistatus);
          if (res.data[0].muh_DikhaiConfirmation.length > 4) {
            setMuh_Dikhai(true);
          } else {
            setMuh_Dikhai(false);
          }
        }

        if (
          // res.data[0].subaarambhYatraReason ||
          // res.data[0].subaarambhYatrastatus ||
          res.data[0].subaarambhYatraConfirmation
          // res.data[0].subaarambhYatraPromiseDate
        ) {
          setsubaarambhYatraReas(res.data[0].subaarambhYatraReason);
          setsubaarambhYatrastats(res.data[0].subaarambhYatrastatus);
          setsubaarambhYatraPromiseDate(res.data[0].subaarambhYatraPromiseDate);
          setsubaarambhYatraConf(res.data[0].subaarambhYatraConfirmation);
          if (res.data[0].subaarambhYatraConfirmation.length > 4) {
            setSubaarambhYatra(true);
          } else {
            setSubaarambhYatra(false);
          }
        }
      });
  }, []);

  const orderId = postInfo.orderId;
  function status(value) {
    if (value === "honneymoon") {
      axios
        .post(
          `api/adminuserlist/postweddingchangehonneymoon/${forms[0].orderId}`
        )
        .then((res) => {
          console.log(res.data);
        });
    }
    if (value === "catering") {
      axios
        .post(`api/adminuserlist/postweddingchangecatering/${forms[0].orderId}`)
        .then((res) => {});
    }
  }
  function points(val) {
    axios
      .post(`api/adminuserlist/postweddingpoints/${forms[0].userId}`, { val })
      .then((res) => {
        console.log(res.data);
      });
  }
  function voucher(val) {
    axios
      .post(`api/adminuserlist/postweddingvoucher/${forms[0].userId}`, { val })
      .then((res) => {});
  }

  // console.log(honeymoonConf);
  function updateEventDetails() {
    const eventDatas = {
      orderId,
      honeymoonConf,
      honeymoonPromiseDat,
      honeymoonReas,
      honeymoonstats,
      muh_DikhaiConf,
      muh_DikhaiPromiseDat,
      muh_Dikhaistats,
      muh_DikhaiReas,
      subaarambhYatraConf,
      subaarambhYatraPromiseDat,
      subaarambhYatraReas,
      subaarambhYatrastats,
    };
    // console.log(eventDatas);

    axios
      .post("/api/postwedding/updateInfos", { eventDatas })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row my-12">
      <h3 className="fs-4 mb-3">Details</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th className=" fw-bold" scope="col">
                Promise Date
              </th>
              <th className=" fw-bold" scope="col">
                Confirmed
              </th>
              <th className=" fw-bold" scope="col">
                Reason
              </th>
              <th className=" fw-bold" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {!!honeymoon && (
              <tr>
                <th>Honneymoon</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    onChange={(e) => {
                      setHoneymoonPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    value={honeymoonPromiseDat}
                    className={"input"}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (honeymoonConf == "Not Confirmed") {
                        setHoneymoonConf("Confirmed");
                      } else if (honeymoonConf == "Confirmed") {
                        setHoneymoonConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {honeymoonConf}
                  </div>
                </td>

                <td>
                  <input
                    type={"text"}
                    value={honeymoonReas}
                    onChange={(e) => {
                      setHoneymoonReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>

                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (honeymoonstats == "pending") {
                        setHoneymoonstats("Completed");
                      } else if (honeymoonstats == "Completed") {
                        setHoneymoonstats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {honeymoonstats}
                  </div>
                </td>
              </tr>
            )}
            {!!muh_Dikhai && (
              <tr>
                <th>muh_Dikhai</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={muh_DikhaiPromiseDat}
                    type={"date"}
                    onChange={(e) => {
                      setmuh_DikhaiPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (muh_DikhaiConf == "Not Confirmed") {
                        setmuh_DikhaiConf("Confirmed");
                      } else if (muh_DikhaiConf == "Confirmed") {
                        setmuh_DikhaiConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {muh_DikhaiConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={muh_DikhaiReas}
                    onChange={(e) => {
                      setmuh_DikhaiReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (muh_Dikhaistats == "pending") {
                        setmuh_Dikhaistats("Completed");
                      } else if (muh_Dikhaistats == "Completed") {
                        setmuh_Dikhaistats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {muh_Dikhaistats}
                  </div>
                </td>
              </tr>
            )}
            {!!subaarambhYatra && (
              <tr>
                <th>subaarambhYatra</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    type={"date"}
                    value={subaarambhYatraPromiseDat}
                    onChange={(e) => {
                      setsubaarambhYatraPromiseDate(e.target.value);
                      setUpdtBtn(false);
                    }}
                    className={"input"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                    onClick={() => {
                      if (subaarambhYatraConf == "Not Confirmed") {
                        setsubaarambhYatraConf("Confirmed");
                      } else if (subaarambhYatraConf == "Confirmed") {
                        setsubaarambhYatraConf("Not Confirmed");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {subaarambhYatraConf}
                  </div>
                </td>
                <td>
                  <input
                    type={"text"}
                    value={subaarambhYatraReas}
                    onChange={(e) => {
                      setsubaarambhYatraReas(e.target.value);
                      setUpdtBtn(false);
                    }}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    onClick={() => {
                      if (subaarambhYatrastats == "pending") {
                        setsubaarambhYatrastats("Completed");
                      } else if (subaarambhYatrastats == "Completed") {
                        setsubaarambhYatrastats("pending");
                      } else {
                        alert("Refresh the Page.Internet Connection Lost");
                      }
                      setUpdtBtn(false);
                    }}
                  >
                    {subaarambhYatrastats}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
          <tr rowspan="5" className="text-center">
            <th></th>
            <th></th>
            <button
              type="button"
              onClick={() => updateEventDetails()}
              className="my-3 btn btn-success"
              disabled={updtBtn}
            >
              Update
            </button>
          </tr>
        </table>
        {/* } */}
        <hr class="my-5" />
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Points and Vouchers</th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
              <th className=" fw-bold" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Points</th>
              <td>{datapoints}</td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={(val) => points(50)}
                >
                  50
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(100)}
                >
                  100
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(150)}
                >
                  150
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(200)}
                >
                  200
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(250)}
                >
                  250
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(300)}
                >
                  300
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(350)}
                >
                  350
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(400)}
                >
                  400
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(450)}
                >
                  450
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => points(500)}
                >
                  500
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger btn-sm"
                  onClick={() => points(0)}
                >
                  0
                </div>
              </td>
            </tr>
            <tr>
              <th>Vouchers</th>
              <td>{datavoucher}</td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={(val) => voucher(1000)}
                >
                  1000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(2000)}
                >
                  2000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(3000)}
                >
                  3000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(4000)}
                >
                  4000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-success btn-sm"
                  onClick={() => voucher(5000)}
                >
                  5000
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger btn-sm"
                  onClick={() => voucher(0)}
                >
                  0
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="my-5" />
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th className=" fw-bold" scope="col">
                Order Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Bride Name </th>
              <td>{forms[0].BrideName}</td>
            </tr>
            <tr>
              <th>Client Name</th>
              <td>{forms[0].ClientName}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{forms[0].City}</td>
            </tr>
            <tr>
              <th>Food Type</th>
              <td>{forms[0].Food.Foodtype}</td>
            </tr>
            <tr>
              <th>From Date</th>
              <td>{forms[0].FromDate}</td>
            </tr>
            <tr>
              <th>To Date</th>
              <td>{forms[0].ToData}</td>
            </tr>
            <tr>
              <th>Groom Name</th>
              <td>{forms[0].GroomName}</td>
            </tr>
            <tr>
              <th>Food Items</th>
              <td>{forms[0].Food.items}</td>
            </tr>
            <tr>
              <th>Max Budget</th>
              <td>{forms[0].MaxBudget}</td>
            </tr>
            <tr>
              <th>Min Budget</th>
              <td>{forms[0].MinBudget}</td>
            </tr>
            <tr>
              <th>Honney Moon Destination Abroad</th>
              <td>{forms[0].Honneymoon.DestinationAbroad}</td>
            </tr>
            <tr>
              <th>Honney Moon Destination India</th>
              <td>{forms[0].Honneymoon.DestinationIndia}</td>
            </tr>
            <tr>
              <th>Number Of Guests</th>
              <td>{forms[0].NoOfGuests}</td>
            </tr>
            <tr>
              <th>SubaarambhYatra</th>
              <td>{forms[0].SubaarambhYatra[0]}</td>
            </tr>
            <tr>
              <th>SubaarambhYatra</th>
              <td>{forms[0].SubaarambhYatra[1]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[0]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[1]}</td>
            </tr>
            <tr>
              <th>muhDikhal</th>
              <td>{forms[0].muhDikhal[2]}</td>
            </tr>

            <tr>
              <th>Dance</th>
              <td>{forms[0].muhDikhalvalue.dancevalues}</td>
            </tr>
            <tr>
              <th>music</th>
              <td>{forms[0].muhDikhalvalue.musicvalues}</td>
            </tr>
            <tr>
              <th>Special Service</th>
              <td>{forms[0].SpecialService}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{forms[0].date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orderslist;
