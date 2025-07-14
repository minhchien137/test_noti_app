import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const access_token = await AsyncStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    console.log("response: ", response);
    return response;
  },
  (error: AxiosError) => {
    console.log("error", error);
    return Promise.reject(error.response?.data);
  }
);

export default axiosClient;
