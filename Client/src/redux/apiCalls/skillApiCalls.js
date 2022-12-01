import {  userRequest } from "../../requestMethod";
import { addSkillSuccess, deleteSkillSuccess, getSkillSuccess, updateSkillSuccess } from "../reducers/skill";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const getSkill = async(dispatch) => {
    try {
        const res = await userRequest.get(`/skill/${userId}`);
        dispatch(getSkillSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const addSkill = async(skill, dispatch) => {
    try {
        const res = await userRequest.post("/skill", {userId, ...skill});
        dispatch(addSkillSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const updateSkill = async (id, skill, dispatch) => {
    try {
        const res = await userRequest.put(`/skill/${id}`, skill);
        dispatch(updateSkillSuccess(res.data));
    }
    catch(err) {
        console.log(err);
    }
}

export const deleteSkill = async(id, dispatch) => {
    try {
        await userRequest.delete(`/skill/${id}`);
        dispatch(deleteSkillSuccess(id));
    }
    catch(err) {
        console.log(err);
    }
}