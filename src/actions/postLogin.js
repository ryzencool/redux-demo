import { POST_LOGIN } from "./types";

export const postLogin = (page = 1) => dispatch => {
  fetch("https://reqres.in/api/users?page=" + page)
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
