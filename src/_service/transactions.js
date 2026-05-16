import { API } from "../_api";

export const getTransactions = async () => {
  try {
    const { data } = await API.get("/transactions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    });

    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getTransactionHistory = async () => {

    const token = localStorage.getItem("accessToken");

    console.log(token);

    const response = await API.get("/transactions/history", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data.data;
};

export const createTransactions = async (data) => {
  try {
    const response = await API.post(
      "/transactions",
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

