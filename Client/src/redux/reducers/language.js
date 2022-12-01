import { createSlice} from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: [],
        currentId: 0,
    },
    reducers: {
        addLanguageSuccess: (state, action) => {
            state.language.push(action.payload);
        },
        deleteLanguageSuccess: (state, action) => {
            state.language.splice(
                state.language.findIndex((item) => item._id === action.payload.id) , 1
            );
        },
        updateLanguageSuccess: (state, action) => {
            state.language[state.language.findIndex((item) => item._id === action.payload.id)] = action.payload.language;
        },
        getLanguageSuccess: (state, action) => {
            state.language = action.payload;
        },
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
    }
});

export const {addLanguageSuccess, deleteLanguageSuccess, updateLanguageSuccess, getLanguageSuccess, setCurrentId, resetCurrentId} = languageSlice.actions;

export default languageSlice.reducer;