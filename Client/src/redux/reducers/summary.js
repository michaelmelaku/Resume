import {createSlice} from '@reduxjs/toolkit';

const summarySlice = createSlice({
    name: "summary",
    initialState: {
        summary: [],
        currentId: 0,
    },
    reducers: {
        getSummarySuccess: (state, action) => {
            state.summary = action.payload;
        },
        deleteSummarySuccess: (state, action) => {
            state.summary.splice(
                state.summary.findIndex((item) => item._id === action.payload.id), 1
            );
        },
        updateSummarySuccess: (state, action) => {
            state.summary[state.summary.findIndex((item) => item._id === action.payload.id)] = action.payload.summary;
        },

        addSummarySuccess: (state, action) => {
            state.summary.push(action.payload);
        },
        setCurrentSummaryId: (state, action) => {
            state.currentId = action.payload;
        },
        resetCurrentId: (state) => {
            state.currentId = 0;
        }
    }
});


export const {getSummarySuccess, deleteSummarySuccess, updateSummarySuccess, addSummarySuccess, setCurrentSummaryId, resetCurrentId} = summarySlice.actions;
export default summarySlice.reducer;