// import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/amazon.jpg";
import Invoice from "../components/Invoice";
import AppHeader from "../components/AppHeader";

function InvoiceLayout() {
  const shippingDetails = useSelector((state) => state.invoice.shippingDetails);
  const sellerDetails = useSelector((state) => state.invoice.sellerDetails);
  const billingDetails = useSelector((state) => state.invoice.billingDetails);
  const orderDetails = useSelector((state) => state.invoice.orderDetails);
  const invoiceDetails = useSelector((state) => state.invoice.invoiceDetails);
  const itemDetails = useSelector((state) => state.invoice.itemDetails);

  // useEffect(() => {
  // console.log("Shipping Details: ", shippingDetails);
  // console.log("Seller Details: ", sellerDetails);
  // console.log("Billing Details: ", billingDetails);
  // console.log("Order Details: ", orderDetails);
  // console.log("Invoice Details: ", invoiceDetails);
  // console.log("Item Details: ", itemDetails);
  // }, [shippingDetails, sellerDetails, billingDetails, orderDetails, invoiceDetails, itemDetails]);

  return (
    <div>
      <AppHeader />

      <div className="flex justify-center items-center">
        <Invoice
          logoUrl={logo}
          sellerDetails={sellerDetails}
          billingDetails={billingDetails}
          shippingDetails={shippingDetails}
          orderDetails={orderDetails}
          invoiceDetails={invoiceDetails}
          reverseCharge={invoiceDetails?.reverseCharge}
          itemDetails={itemDetails}
        />
      </div>
    </div>
  );
}

export default InvoiceLayout;
