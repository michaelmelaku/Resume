import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: {
        experience: [],
        currentId: 0,
    },
    reducers: {
        //GET ALL
        getExperience: (state, action) => {
            state.experience = action.payload;
        },

        //DELETE 
        deleteExperience: (state, action) => {
            state.experience.splice(
                state.experience.findIndex((item) => item._id === action.payload.id), 1
            );
        },

        //UPDATE
        updateExperience: (state, action) => {
            state.experience[state.experience.findIndex((item) => item._id === action.payload.id)]
                = action.payload.experience;
        },

        //ADD
        addExperience: (state, action) => {
            state.experience.push(action.payload);
        },
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
    }
})

export const {getExperience, deleteExperience, updateExperience, addExperience, setCurrentId, resetCurrentId} = experienceSlice.actions;
export default experienceSlice.reducer;