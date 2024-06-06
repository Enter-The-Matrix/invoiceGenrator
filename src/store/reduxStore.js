import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./slice/invoiceSlice";

export const reduxStore = configureStore({
    reducer:{
        invoice: invoiceSlice
    }
})