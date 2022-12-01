import {createSlice} from '@reduxjs/toolkit';

const personSlice = createSlice({
    name: 'person', 
    initialState: {
        person: [],
        currentId: 0,
    },
    reducers: {
        getPersonSuccess : (state, action) => {
            state.person = action.payload;
        },
        deletePersonSuccess : (state, action) => {
            state.person.splice(
                state.person.findIndex((item) => item._id === action.payload.id), 1
            )
        },

        updatePersonSuccess: (state, action) => {
            state.person[state.person.findIndex((item) => item._id === action.payload.id)] = action.payload.person;
        },
        addPersonSuccess: (state, action) => {
            state.person.push(action.payload);
        },
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
        
    }
});

export const {getPersonSuccess, deletePersonSuccess, updatePersonSuccess, addPersonSuccess, setCurrentId, resetCurrentId} = personSlice.actions;
export default personSlice.reducer;