import { userRequest } from "../../requestMethod";
import { getExperience, addExperience, deleteExperience, updateExperience } from "../reducers/experience";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const getExperiences = async (dispatch) => {
    try {
        const res = await userRequest.get(`/experience/${userId}`);
        dispatch(getExperience(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const deleteExperiences = async(id, dispatch) => {
    try {
        await userRequest.delete(`/experience/${id}`);
        dispatch(deleteExperience(id));
    } catch (err) {
        console.log(err);
    }
}

export const updateExperiences = async(id, experience, dispatch) => {
    try {
        const res = await userRequest.put(`/experience/${id}`, experience);
        dispatch(updateExperience(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const addExperiences = async(experience, dispatch) => {
    try {
        const res = await userRequest.post('/experience', {userId, ...experience});
        dispatch(addExperience(res.data));
    } catch (err) {
        console.log(err);
    }
}