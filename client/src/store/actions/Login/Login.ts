import axios from "axios";
import { loginRequest, loginSuccess } from "../../types/Login/login";
import { Payload } from "../../../containers/Login/Login";
import { dangerToast, successToast } from "../../../Toast/toast";

export const login = (payload: Payload) => {
  return (dispatch: any) => {
    dispatch(loginRequest(payload.data));
    return axios
      .post(payload.url, payload.data)
      .then(response => {
        dispatch(loginSuccess(response.data));
        successToast(response.data.message);
        localStorage.setItem("token", response.data.access_token);
        payload.history.push("/landingPage");
      })
      .catch(error => {
        const errorMsg = error.response.data.Error.message;
        dangerToast(errorMsg);
      });
  };
};
