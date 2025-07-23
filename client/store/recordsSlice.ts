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
        updateRecord: (state, action) => {
            const { payload, type } = action;
            const record = state.records[payload.rid];
            if (!record) return;

            if (type === "addBill") {
                record.bids.push(payload.id);
                record.netExpense += payload.amount;
                record.lastEdited = payload.editedAt;
            } else if (type === "removeBill") {
                record.bids = record.bids.filter(bid => bid !== payload.id);
                record.netExpense -= payload.amount;
                record.lastEdited = payload.editedAt;
            }
        }
    },
});

export const { loadRecord, addRecord, removeRecord, updateRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
