import { userRequest } from "../../requestMethod";
import { addSummarySuccess, deleteSummarySuccess, getSummarySuccess, updateSummarySuccess } from "../reducers/summary";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const getSummary = async(dispatch) => {
    try {
        const res = await userRequest.get(`/summary/${userId}`);
        dispatch(getSummarySuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const deleteSummary = async(id, dispatch) => {
    try {
        await userRequest.delete(`/summary/${id}`);
        dispatch(deleteSummarySuccess(id));
    } catch (err) {
        console.log(err);
    }
}

export const updateSummary = async (id, summary, dispatch) => {
    try {
        const res = await userRequest.put(`/summary/${id}`, summary);
        dispatch(updateSummarySuccess(res.data));
    }
    catch(err) {
        console.log(err);
    }
}

export const addSummary = async(summary, dispatch) => {
    try {
        const res = await userRequest.post("/summary", {userId, ...summary});
        dispatch(addSummarySuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}
