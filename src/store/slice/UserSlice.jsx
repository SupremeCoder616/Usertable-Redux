import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
            // console.log(action.payload)
        },
        removeUser(state, action){
            state.splice(action.payload, 1, "This user is deleted")
            // console.log("Hi " + action.payload);
        },
        deleteUsers(state, action){
            return [];
        },
    },
})

// console.log(userSlice.actions);

export default userSlice;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;