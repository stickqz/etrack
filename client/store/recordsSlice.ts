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
        removeRecord: (state, action: { payload: { id: string } }) => {
            const { id } = action.payload;
            delete state.records[id];
        },
        _addBillToRecord: (state, action) => {
            const { payload } = action;
            const record = state.records[payload.rid];
            if (record) {
                record.bids.push(payload.id);
                record.netExpense += payload.amount;
                record.lastEdited = payload.editedAt;
            }
        }
    },
});

export const { loadRecord, addRecord, removeRecord, _addBillToRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
