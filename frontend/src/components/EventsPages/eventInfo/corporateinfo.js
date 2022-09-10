import React from 'react'

export function Corporateinfo(props) {
  const personalcorporate = props.personalcorporate
  const corporate = props.corporate && props.corporate
  const name = props.name

console.log("vanthutu",props.corporate);
return(
      props.corporate &&
        <>
        <div className="container">
       <table class="table">
    <tbody>
    
      <tr>
        <th scope="row" className="fw-bold">Name of the customer</th>
        <td>{props.name}</td>
       
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Event Name</th>
        <td>{props.personalcorporate.eventName}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Order Id</th>
        <td>{props.personalcorporate.orderId}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Date of event</th>
        <td colspan="2">{props.personalcorporate.date}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">Date of Booking</th>
        <td colspan="2">{props.personalcorporate.createdAt}</td>
        
      </tr>
      <tr>
        <th scope="row" className="fw-bold">No of Guests</th>
        <td colspan="2">{props.personalcorporate.NoOfGuests}</td>
        
      </tr>
    
    </tbody>
  </table>
  </div>
     <div class="my-5" />
      <div>
        <h3 className=" text-center fw-bold mb-2" style={{"fontVariant": "small-caps", "display": "block"}}>{props.personalcorporate.eventName} - [ {props.personalcorporate.date} ]</h3>
  
        <h5 className="text-center fw-bold text-muted mb-3" >Order ID - <span className="fs-6" style={{color:"limegreen"}}>[ {props.personalcorporate.orderId} ]</span></h5>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
          <table class="table align-middle mb-0 bg-white mb-8">
          <thead>
            <tr>
              <th className=" fw-bold" scope="col">Event</th>
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
               {props.corporate.invitationReason && (
                <tr>
               <th>Invitation</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.invitationPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.invitationService}
                  </div>
                </td>
                <td>
                <textarea
                    // type={"text"}
                    value={props.corporate.invitationReason}
                  />
                 
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.invitationStatus}
                  </div>
                </td>
              </tr>
                )}
              {props.corporate.cateringReason && (
                <tr>
               <th>Catering</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.cateringPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.cateringService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.cateringReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.cateringStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.corporate.venueReason && (
                <tr>
               <th>Venue </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.venuePromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.venueService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.venueReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.venueStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.corporate.showsReason && (
                <tr>
               <th>Show </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.showsPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.showsService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.showsReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.showsStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.corporate.photographyReason && (
                <tr>
               <th>Photography </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.photographyPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.photographyService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.photographyReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.photographyStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.corporate.decorationReason && (
                <tr>
               <th>Decoration </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.decorationPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.decorationService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.decorationReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.decorationStatus}
                  </div>
                </td>
              </tr>
              )}
              {props.corporate.hostingReason && (
                <tr>
               <th>Hosting </th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.hostingPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.hostingService}
                  </div>
                </td>
                <td>
                  <textarea
                    // type={"text"}
                    value={props.corporate.hostingReason}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.hostingStatus}
                  </div>
                </td>
              </tr>
              )}



              {props.corporate.AdditionalReason && (
                <tr>
               <th>Additional Service</th>
                <td className="text-start ps-0 ms-0 pe-5">
                  <input
                    value={props.corporate.AdditionalPromiseDate}
                    type={"date"}
                    className={"input-sm"}
                  />
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn btn-info"
                  >
                    {props.corporate.AdditionalService}
                  </div>
                </td>
                <td className="text-justify" >
                
                <textarea
                    // type={"text"}
                    value={props.corporate.AdditionalReason}
                  />
                
                
                </td>
                <td>
                  <div
                    type="button"
                    className="btn btn-sm btn-info"
                    
                  >
                    {props.corporate.AdditionalStatus}
                  </div>
                </td>
              </tr>
              )}

        
         </tbody>
        </table>
          </div>
        </div>
      </div>
      </>
      
  //  
)
}
