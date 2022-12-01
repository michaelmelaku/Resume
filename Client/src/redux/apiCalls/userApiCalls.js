import { publicRequest } from "../../requestMethod"
import { login, register } from "../reducers/user";


export const loginUser = async(dispatch, user) => {
    try {
        const res = await publicRequest.post("/user/login", user);
        dispatch(login(res.data));
    } catch (err) {
        console.log(err)
    }
}

export const registerUser =  async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/user/register", user);
        dispatch(register(res.data));
    } catch(err) {
        console.log(err);
    }
}
