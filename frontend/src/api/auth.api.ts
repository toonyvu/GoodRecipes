import api from "./api";

export async function login(email: string, password: string) {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const { accessToken } = response.data;
  console.log(response);

  localStorage.setItem("accessToken", accessToken);

  return response.data;
}

export async function signup(
  email: string,
  username: string,
  password: string,
) {
  const response = await api.post("/auth/register", {
    email,
    username,
    password,
  });

  return response.data;
}
export async function logout() {
  try {
    await api.post("/auth/logout");
  } catch (err: any) {
    console.log(err.message);
  } finally {
    localStorage.removeItem("accessToken");
  }
}
