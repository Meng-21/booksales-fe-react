import API from "../_api";

export const getAuthors = async () => {
  const {data} = await API.get("/authors");
  return data.data;
};


export const createAuthor = async (data) => {
  const ressponse = await API.post("/authors", data);
  return ressponse.data;
};