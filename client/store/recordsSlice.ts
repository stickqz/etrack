import { createSlice } from "@reduxjs/toolkit";
import { Records } from "../types/dataTypes";


const initialState = {
    records: {} as Records,
    isRecordsLoaded: false,
};

const recordsSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        loadRecord: (state, action: { payload: Records }) => {
            state.records = action.payload;
            state.isRecordsLoaded = true;
        },
        addRecord: (state, action: { payload: any }) => {
            const newRecord = action.payload;

            state.records[newRecord.id] = newRecord;


        },
        removeRecord: (state, action) => {
            const { payload } = action;
            delete state.records[payload];
        },
        updateRecord: (state, { payload}) => {
            const {bill, type} = payload;
            const record = state.records[bill.recordId];

            if (!record) return;

            if (type === "addBill") {
                record.bids.push(bill.id);
                record.netAmount += bill.amount;
                record.lastEdited = bill.createdAt;
            } else if (type === "removeBill") {
                record.bids = record.bids.filter(bid => bid !== bill.id);
                record.netAmount -= bill.amount;
                record.lastEdited = bill.createdAt;
            }
        }
    },
});

export const { loadRecord, addRecord, removeRecord, updateRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
