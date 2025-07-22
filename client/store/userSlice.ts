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
        updateUser: (state, action) => {
            const { payload, type } = action;

            if (type === "addRecord") {
                if (!state.rids.includes(payload.id)) {
                    state.rids.push(payload.id);
                }
            } else if (type === "removeRecord") {
                state.rids = state.rids.filter(rid => rid !== payload.id);
            }
        }

    },
});


export const { loadUser, updateUser } = userSlice.actions;
export default userSlice.reducer;


