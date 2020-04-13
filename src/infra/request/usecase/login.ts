import axios from "axios";
import { Signup } from "@/protocols/usecase/signup";

const request = axios.create({
  baseURL: "https://clean-foco-project.herokuapp.com/api",
  responseType: "json"
});

export const signUpApi = async (params: Signup) =>
  request.post("/signup", params);
