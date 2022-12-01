import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: "education",
    initialState: {
        education: [],
        currentId: 0,
    },
    reducers: {
        //GET ALL
        getEducationSuccess: (state, action) => {
            state.education = action.payload;
        },

        //DELETE 
        deleteEducationSuccess: (state, action) => {
            state.education.splice (
                state.education.findIndex((item) => item._id === action.payload.id), 1
            );
        },

        //UPDATE
        updateEducationSuccess: (state, action) => {
            state.education[state.education.findIndex((item) => item._id === action.payload.id)]
                = action.payload.education;
        },

        //ADD
        addEducationSuccess: (state, action) => {
            state.education.push(action.payload);
        },
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
    }
});

export const {getEducationSuccess, deleteEducationSuccess, updateEducationSuccess, addEducationSuccess, setCurrentId, resetCurrentId} = educationSlice.actions;

export default educationSlice.reducer;