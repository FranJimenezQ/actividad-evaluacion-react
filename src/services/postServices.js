import data from "../profiles.json";
import axios from "axios"

export let token = localStorage.getItem("token");
export let invalid = false;
export function getProfiles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.profiles);
      
    }, Math.random() * 3000 + 5000);
  });
}


export function Login(username, password){
  return axios
  .post("https://three-points.herokuapp.com/api/login",
  {
    username:username,
    password:password,
    Body: { username: username, password: password },
    "Content-Type": 'application/json'
  })
  .then((res) => {
    console.log(res.data)
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      console.log("token:",token);
      return res.data.token;
    } else {
      token = ''
      invalid = true;
      console.log("invalid:", invalid);
      return false;
    }
  })
  .catch((error) => {
    if (invalid) {
      invalid = true;
      console.log("invalid:", invalid);
    }
    console.log("error:", error);
    return error;
  });
}