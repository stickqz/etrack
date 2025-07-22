import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/dataTypes";

const initialState= {} as User;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action: { payload: User }) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.name = action.payload.name;
            state.rids = action.payload.rids;
        },
        _addRecordToUser: (state, action) => {
            const { payload } = action;
            if (!state.rids.includes(payload.id)) {
                state.rids.push(payload.id);
            }
        }

    },
});


export const { loadUser, _addRecordToUser } = userSlice.actions;
export default userSlice.reducer;


