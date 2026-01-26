import api from "./api";

export const getProfile = async () => {
  try {
    const res = await api.get("/profile");
    return res.data;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};
