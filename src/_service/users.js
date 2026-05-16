import { API } from "../_api";

export const getUsers = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    const { data } = await API.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

