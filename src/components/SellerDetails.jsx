import { capitalizeFirstAplha } from "../util/capitalizeFirstAplha";

const SellerDetails = ({ details }) => {
    // console.log("seller:",details);
    return (
      <div>
        <h2 className="font-bold">Sold By:</h2>
        <p>{capitalizeFirstAplha(details.sellerName)}</p>
        <p>{capitalizeFirstAplha(details.sellerAddress) }</p>
        <p>{capitalizeFirstAplha(details.sellerCity)}, {capitalizeFirstAplha(details.sellerState)}, {details.sellerPincode}</p>
        <p>{capitalizeFirstAplha(details.sellerCountry)}</p>
        <p className=" mt-4"><span className="font-bold">PAN No:</span> {capitalizeFirstAplha(details.sellerPan)}</p>
        <p><span className="font-bold">GST Registration No:</span> {capitalizeFirstAplha(details.sellerGST)}</p>
      </div>
    );
  };
  
  export default SellerDetails;
  