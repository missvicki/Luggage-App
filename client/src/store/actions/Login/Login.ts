// import axios from "axios";
// import { loginRequest, loginSuccess, loginFailed } from "../../types/Login/login";

// const loginFetch = (payload: any) => {
//     return (dispatch: Function) => {
//         dispatch(loginRequest(payload.data))
//         return axios.post(payload.url, payload.data).then(response => {
//             dispatch(loginSuccess(response.data))
//             localStorage.setItem("token", response.data.access_token);
//         }).catch(error => {
//             const errorMsg = error.response.data.error
//             dispatch(loginFailed(errorMsg));
//         })
//     };
// };

// export default loginFetch;
