import axiosClient from "../../axiosClient";
import { PATH_LOGIN } from "./path";

const login = async (NameUser: string, PassWord: string) => {
  const res = await axiosClient.post(PATH_LOGIN, { NameUser, PassWord });
  return res;
};

export { login };
