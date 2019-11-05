import axios from "axios";
import { toast } from "react-toastify";
import {
  loginRequest,
  loginSuccess,
  loginFailed
} from "../../types/Login/login";
import { Payload } from "../../../containers/Login/Login";

export const login = (payload: Payload) => {
  return async (dispatch: any) => {
    dispatch(loginRequest(payload.data));
    const { email, password } = payload.data;
    console.log("here 1");
    await axios
      .post(payload.url, { email, password })
      .then(response => {
        console.log("here 2");
        dispatch(loginSuccess(response.data));
        toast(response.data.message);
        localStorage.setItem("token", response.data.access_token);
        payload.history.push("/landingPage");
      })
      .catch(error => {
        console.log("here 3", error);
        toast(error.response);
        const errorMsg = error.response;
        dispatch(loginFailed(errorMsg));
      });
  };
};
