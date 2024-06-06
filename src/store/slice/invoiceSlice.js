import { createSlice } from "@reduxjs/toolkit";

const sellerDetailsLocal = JSON.parse(localStorage.getItem("sellerDetails"));
const billingDetailsLocal = JSON.parse(localStorage.getItem("billingDetails"));
const shippingDetailsLocal = JSON.parse(localStorage.getItem("shippingDetails"));
const orderDetailsLocal = JSON.parse(localStorage.getItem("orderDetails"));
const invoiceDetailsLocal = JSON.parse(localStorage.getItem("invoiceDetails"));
const itemDetailsLocal = JSON.parse(localStorage.getItem("itemDetails"));

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    sellerDetails: sellerDetailsLocal || null,
    billingDetails: billingDetailsLocal || null,
    shippingDetails: shippingDetailsLocal || null,
    orderDetails: orderDetailsLocal || null,
    invoiceDetails: invoiceDetailsLocal || null,
    itemDetails: itemDetailsLocal || [],
  },
  reducers: {
    setSellerDetails: (state, action) => {
      state.sellerDetails = action.payload;
    },
    setBillingDetails: (state, action) => {
      state.billingDetails = action.payload;
    },
    setShippingDetails: (state, action) => {
      state.shippingDetails = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    setInvoiceDetails: (state, action) => {
      state.invoiceDetails = action.payload;
    },
    setItemDetails: (state, action) => {
      state.itemDetails = action.payload;
    },
  },
});

export const {
  setSellerDetails,
  setBillingDetails,
  setShippingDetails,
  setOrderDetails,
  setInvoiceDetails,
  setItemDetails,
} = invoiceSlice.actions;
export default invoiceSlice.reducer;
