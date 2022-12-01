
import { userRequest } from "../../requestMethod";
import {getPersonSuccess, deletePersonSuccess, updatePersonSuccess, addPersonSuccess} from "../reducers/person";
const userId = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?._id : "";

export const addPerson = async (person, dispatch) => {
    try {
        const res = await userRequest.post("/person", {userId, ...person});
        dispatch(addPersonSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const deletePerson = async (id, dispatch) => {
    try {
        await userRequest.delete(`/person/${id}`);
        dispatch(deletePersonSuccess(id));
    } catch (err) {
        console.log(err);
    }
}

export const updatePerson = async (id, person, dispatch) => {
    try {
        const res = await userRequest.put(`/person/${id}`, person);
        dispatch(updatePersonSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const getPerson = async (dispatch) => {
    try {
        const res = await userRequest.get(`/person/${userId}`);
        dispatch(getPersonSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}