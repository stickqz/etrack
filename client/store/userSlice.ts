import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/dataTypes";

const initialState= {} as User;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action: { payload: User }) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.rids = action.payload.rids;
        },
        updateUser: (state, action) => {
            const { id, type } = action.payload;

            if (type === "addRecord") {
                if (!state.rids.includes(id))
                    state.rids.push(id);

            } else if (type === "removeRecord") {
                state.rids = state.rids.filter(rid => rid !== id);
            }

        }

    },
});


export const { loadUser, updateUser } = userSlice.actions;
export default userSlice.reducer;


