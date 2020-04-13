import axios from "axios";
import { signup } from "@/protocols/usecase/signup";

const request = axios.create({
  baseURL: "https://clean-foco-project.herokuapp.com/api",
  responseType: "json"
});

export const signUpApi = async (params: signup) =>
  request.post("/signup", params);
