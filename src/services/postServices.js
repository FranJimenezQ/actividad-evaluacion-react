import { createElement } from "react";
import data from "../profiles.json";


export function getProfiles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.profiles);
      
    }, Math.random() * 3000 + 5000);
  });
}