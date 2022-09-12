import React, { useEffect, useState } from "react";
import axios from "axios";
import InvoiceDetails from "./invoiceDetails";

function Invoice() {
  
  const [InvoiceDatas, setInvoiceDatas] = useState([]);
  const [currentInvoc, setCurrentInvoc] = useState();
  const [display, setDisplay] = useState(false);

  useEffect(async() => {
    await axios.get("api/invoice/getUserOrders").then((res) => {
      if(res.status === 200){
        setInvoiceDatas(res.data);
      }
    });
    
  }, []);
  // console.log(InvoiceDatas);
  
  async function detailsCall121(item) {
    setCurrentInvoc(item);
    setDisplay(true);
    // console.log(currentDetail);
   }

  return (
    <div className="mb-10 mt-5">
      <div className="row justify-content-center mx-5">
        {InvoiceDatas.map((item, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="card rounded shadow-4-strong">
                <div className="card-body text-center">
                  <h3 className="mb-4 fw-bold">{item.eventName}</h3>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => detailsCall121(item)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {display && <InvoiceDetails data={currentInvoc} />}
    </div>
  );
}

export default Invoice;