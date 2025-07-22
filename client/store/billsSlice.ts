import { createSlice } from "@reduxjs/toolkit";
import { Bills } from "../types/dataTypes";
// Only import types and utility functions here

const initialState = {
    allBills: {} as Bills,
    isBillsLoaded: false,
};

const billsSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {
        loadBill: (state, action: { payload: Bills }) => {
            state.allBills = action.payload;
            state.isBillsLoaded = true;
        },
        addBill: (state, { payload }) => {
            const { id } = payload;
            state.allBills[id] = payload;

        },
        removeBill: (state, action: { payload: { id: string } }) => {
            delete state.allBills[action.payload.id];
        },
    },
});

export const { loadBill, addBill, removeBill } = billsSlice.actions;
export default billsSlice.reducer;



