import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SellerForm from "./pages/SellerForm";
import BillingForm from "./pages/BillingForm";
import ShippingForm from "./pages/ShippingForm";
import OrderForm from "./pages/OrderForm";
import InvoiceForm from "./pages/InvoiceForm";
import ItemForm from "./pages/ItemForm";
import InvoiceLayout from "./pages/InvoiceLayout";

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SellerForm />,
    },
    {
      path: "/gen-invoice",
      element: <InvoiceLayout />,
    },
    {
      path: "/billing",
      element: <BillingForm />,
    },
    {
      path: "/shipping",
      element: <ShippingForm />,
    },
    {
      path: "/order",
      element: <OrderForm />,
    },
    {
      path: "/invoice",
      element: <InvoiceForm />,
    },
    {
      path: "/item",
      element: <ItemForm />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
