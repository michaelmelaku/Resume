import { userRequest } from "../../requestMethod";
import {getEducationSuccess, deleteEducationSuccess, updateEducationSuccess, addEducationSuccess} from "../reducers/education";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const getEducation = async(dispatch) => {
    try {
        const res = await userRequest.get(`/education/${userId}`);
        dispatch(getEducationSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
};

export const deleteEducation = async(id, dispatch) => {
    try {
        await userRequest.delete(`/education/${id}`);
        dispatch(deleteEducationSuccess(id));
    } catch (err) {
        console.log(err);
    }
};

export const updateEducation = async (id, education, dispatch) => {
    try {
        const res = await userRequest.put(`/education/${id}`, education);
        dispatch(updateEducationSuccess(res.data));
    }
    catch(err) {
        console.log(err);
    }
}

export const addEducation = async(education, dispatch) => {
    try {
        const res = await userRequest.post("/education", {userId, ...education});
        dispatch(addEducationSuccess(res.data));
    } catch (err) {
        console.log(err.message);
    }
}