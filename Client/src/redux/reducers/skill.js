import { createSlice } from "@reduxjs/toolkit";


const skillSlice = createSlice ({
    name: 'skill',
    initialState: {
        skill: [],
        currentId: 0,
    },
    reducers: {
        //GET ALL
        getSkillSuccess: (state, action) => {
            state.skill = action.payload;
        },
        deleteSkillSuccess: (state, action) => {
            state.skill.splice(
                state.skill.findIndex((item) => item._id === action.payload.id), 1
            );
        },
        updateSkillSuccess: (state, action) => {
            state.skill[state.skill.findIndex((item) => item._id === action.payload.id)] = action.payload.skill;
        },
        addSkillSuccess: (state, action) => {
            state.skill.push(action.payload);
        },
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
    }
})

export const {getSkillSuccess, deleteSkillSuccess, updateSkillSuccess, addSkillSuccess, setCurrentId, resetCurrentId} = skillSlice.actions;
export default skillSlice.reducer;