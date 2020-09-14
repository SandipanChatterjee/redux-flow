import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject({
      message: "Please check your request payload",
    });
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject({
      message: "Please check your internet connection",
    });
  }
);

export default instance;
