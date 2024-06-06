import { capitalizeFirstAplha } from "../util/capitalizeFirstAplha";

const ShippingDetails = ({ details,supplyplace }) => {
  return (
    <div className=" mt-6">
      <h2 className="font-bold">Shipping Address:</h2>
      <p>{capitalizeFirstAplha(details.buyerName)}</p>
      <p>{capitalizeFirstAplha(details.buyerAddress)}</p>
      <p>{capitalizeFirstAplha(details.buyerCity)}, {capitalizeFirstAplha(details.buyerState)}, {details.buyerPincode} </p>
      <p>{capitalizeFirstAplha(details.buyerCountry)}</p>
      <p><span className="font-bold">State/UT Code:</span> {details.stateUTcode}</p>
      <p><span className="font-bold">Place of supply:</span>  {capitalizeFirstAplha(supplyplace)}</p>
      <p><span className="font-bold">Place of delivery:</span> {capitalizeFirstAplha(details.deliveryPlace) }</p>
    </div>
  );
};

export default ShippingDetails;
