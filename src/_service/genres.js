import API from "../_api";

export const getGenres = async () => {
  const {data} = await API.get("/genres");
  return data.data;
};

export const createGenre = async (data) => {
  const response = await API.post("/genres", data);
  return response.data;
};