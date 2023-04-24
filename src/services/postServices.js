import { createElement } from "react";
import data from "../profiles.json";
import axios from "axios"

export const token = localStorage.getItem("token");

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
    password:password
  })
  .then(res => {
    localStorage.setItem("token", res.data.token)
    console.log(res.data)
    return res
  })
}