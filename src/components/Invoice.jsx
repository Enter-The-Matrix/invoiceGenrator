import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from './Header';
import SellerDetails from './SellerDetails';
import BillingDetails from './BillingDetails';
import ShippingDetails from './ShippingDetails';
import OrderDetails from './OrderDetails';
import ItemDetails from './ItemDetails';
import Footer from './Footer';

const Invoice = ({
  logoUrl,
  sellerDetails,
  billingDetails,
  shippingDetails,
  orderDetails,
  invoiceDetails,
  reverseCharge,
  itemDetails,
  
}) => {
  const invoiceRef = useRef();

  const handleDownloadPdf = async () => {
    const canvas = await html2canvas(invoiceRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice.pdf');
  };

  return (
    <div>
      <div ref={invoiceRef} className="p-10 border max-w-[1000px] border-gray-300">
        <Header logoUrl={logoUrl} />
        <div className="flex justify-between">
          <SellerDetails details={sellerDetails} />
          <div className="text-right">
            <BillingDetails details={billingDetails} />
            <ShippingDetails details={shippingDetails }  supplyplace ={sellerDetails.supplyPlace} />
          </div>
        </div>
        <div className='flex flex-col w-full'>
        <OrderDetails 
          orderDetails={orderDetails}
          invoiceDetails={invoiceDetails}
        />
        <ItemDetails 
          items={itemDetails}
          placeOfSupply={sellerDetails.supplyPlace}
          placeOfDelivery={shippingDetails.deliveryPlace}
        />
        </div>
        <Footer sellerName={sellerDetails.sellerName} reverseCharge={reverseCharge}  />
      </div>
      <div className='flex justify-end'>
      <button onClick={handleDownloadPdf} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Download PDF
      </button>
      </div>
      
    </div>
  );
};

export default Invoice;
