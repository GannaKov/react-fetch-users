import axios from "axios";

const BASEURL = "https://jsonplaceholder.typicode.com/users";
const instance = axios.create({ baseURL: BASEURL });

export const getUsers = async () => {
  const { data } = await instance.get();
  return data;
};

export const getSingleUserById = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};
