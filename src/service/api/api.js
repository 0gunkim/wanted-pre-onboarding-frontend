import instance from "../axios/axiosInterceptor";

/** AUTH */
export const SIGN_IN = async (data) => {
  try {
    const response = await instance.post("auth/signin", data);
    const token = response.data.access_token;
    localStorage.setItem("access_token", token);
  } catch (e) {
    console.log(e);
  }
};
export const SIGN_UP = async (data) => {
  try {
    const response = await instance.post("auth/signup", data);
  } catch (e) {
    console.log(e);
  }
};

/** TODO */
export const GET_TODO = async () => {
  try {
    const response = await instance.get("todos");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const POST_TODO = async (data) => {
  try {
    const response = await instance.post("/todos", data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const UPDATE_TODO = async (data, id) => {
  try {
    const response = await instance.put(`/todos/${id}`, data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const DELETE_TODO = async (id) => {
  try {
    const response = await instance.put(`/todos/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
