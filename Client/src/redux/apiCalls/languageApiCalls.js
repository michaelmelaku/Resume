import { userRequest } from "../../requestMethod";
import {addLanguageSuccess, deleteLanguageSuccess, updateLanguageSuccess, getLanguageSuccess} from "../reducers/language";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const getLanguage = async (dispatch) => {
    try {
        const res = await userRequest.get(`/language/${userId}`);
        dispatch(getLanguageSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const addLanguage = async (language, dispatch) => {
    try {
        const res = await userRequest.post("/language", {userId, ...language});
        dispatch(addLanguageSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}
export const updateLanguage = async (id, language, dispatch) => {
    try {
        const res = await userRequest.put(`/language/${id}`, language);
        dispatch(updateLanguageSuccess(res.data));
    }
    catch(err) {
        console.log(err);
    }
}

export const deleteLanguage = async(id, dispatch) => {
    try {
        await userRequest.delete(`/language/${id}`);
        dispatch(deleteLanguageSuccess(id));
    } catch (err) {
        console.log(err);
    }
}

export const udpateLanguage = async(id, dispatch) => {
    try {
        dispatch(updateLanguageSuccess(id));
    } catch (err) {
        console.log(err);
    }
}

