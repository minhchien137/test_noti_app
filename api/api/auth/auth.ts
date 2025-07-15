import axiosClient from "../../axiosClient";
import { PATH_CHECK_ACCESS, PATH_LOGIN } from "./path";

const login = async (NameUser: string, PassWord: string) => {
  const res = await axiosClient.post(PATH_LOGIN, { NameUser, PassWord });
  return res;
};

const checkAccess = async () => {
  const res = await axiosClient.get(PATH_CHECK_ACCESS);
  return res;
};

export { login, checkAccess };
