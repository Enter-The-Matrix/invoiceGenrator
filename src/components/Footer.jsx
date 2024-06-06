import signature from "../assets/signature.jpg";
import { capitalizeFirstAplha } from "../util/capitalizeFirstAplha";
const Footer = ({ sellerName, reverseCharge }) => {
  return (
    <div className="mt-4 text-center">
      <div className="flex flex-col justify-end items-end gap-2 mt-4">
        <p className="font-bold">For {sellerName}:</p>
        <div className="text-right">
          <img src={signature} alt="Signature" className="h-16 mb-2" />
          <p className="font-bold">Authorised Signatory</p>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-400 ">
        <p className="text-sm font-semibold text-start mb-10 ">
          Whether tax is payable under reverse charge -{" "}
          {capitalizeFirstAplha(reverseCharge)}
        </p>

        <p className="text-xs font-extralight">
          * ASPL: Amazon Seller Services Pvt. Ltd., ABIPL: Amazon Retail India
          Pvt. Ltd.
        </p>
        <p className="text-xs font-extralight">
          Customers desirous of availing input GST credit are requested to
          create a business account and purchase on Amazon business from
          Business eligible offers.
        </p>
        <p className="text-xs font-extralight">
          Please note that this invoice is not a demand for payment
        </p>
      </div>
    </div>
  );
};

export default Footer;
