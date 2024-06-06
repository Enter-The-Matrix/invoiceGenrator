import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setBillingDetails, setInvoiceDetails, setItemDetails, setOrderDetails, setSellerDetails, setShippingDetails } from "../store/slice/invoiceSlice";
import { useNavigate } from "react-router-dom";

function AppHeader() {
   const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("sellerDetails");
    localStorage.removeItem("shippingDetails");
    localStorage.removeItem("orderDetails");
    localStorage.removeItem("invoiceDetails");
    localStorage.removeItem("billingDetails");
    localStorage.removeItem("itemDetails");
    dispatch(setSellerDetails(null))
    dispatch(setShippingDetails(null))
    dispatch(setOrderDetails(null))
    dispatch(setInvoiceDetails(null))
    dispatch(setBillingDetails(null))
    dispatch(setItemDetails(null))
    navigate('/')
  };
  return (
    <div className="flex justify-end p-4">
      <Button type="primary" onClick={handleLogout}>
        Logout{" "}
      </Button>
    </div>
  );
}

export default AppHeader;
