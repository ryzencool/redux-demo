import { POST_LOGIN } from "./types";

export const postLogin = () => dispatch => {
  fetch("https://reqres.in/api/users?page=2")
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch({
        type: POST_LOGIN,
        payload: res
      });
    });
};
