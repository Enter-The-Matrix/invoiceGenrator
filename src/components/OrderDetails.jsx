
const OrderDetails = ({ orderDetails, invoiceDetails ,}) => {
    return (
      <div className="mt-6 flex justify-between items-center">
        <div>
        <p> <span className="font-bold">Order Number:</span>  {orderDetails.orderNumber}</p>
        <p> <span className="font-bold">Order Date:</span> {orderDetails.orderDate}</p>
        </div>
        <div>
        <p className="text-end" > <span className="font-bold">Invoice Number:</span>  {invoiceDetails.invoiceNumber}</p>
        <p className="text-end"> <span className="font-bold">Invoice Details:</span> {invoiceDetails.invoiceDetail}</p>
        <p className="text-end"> <span className="font-bold">Invoice Date:</span> {invoiceDetails.invoiceDate}</p>
        </div>
      </div>
    );
  };
  
  export default OrderDetails;
  