import axiosClient from "../../axiosClient";
import { PATH_LOGIN } from "./path";

const login = async (username: string, password: string) => {
  const res = await axiosClient.post(PATH_LOGIN, { username, password });
  return res;
};

export { login };
