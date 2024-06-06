import { capitalizeFirstAplha } from "../util/capitalizeFirstAplha";

const BillingDetails = ({ details }) => {
  return (
    <div>
      <h2 className="font-bold">Billing Address:</h2>
      <p>{capitalizeFirstAplha(details.buyerName) }</p>
      <p>{ capitalizeFirstAplha(details.buyerAddress)}</p>
      <p>{ capitalizeFirstAplha(details.buyerCity)}, {capitalizeFirstAplha(details.buyerState)}, {details.buyerPincode} </p>
      <p>{capitalizeFirstAplha(details.buyerCountry)}</p>
      <p><span className="font-bold">State/UT Code:</span> {details.stateUTcode}</p>
    </div>
  );
};

export default BillingDetails;
