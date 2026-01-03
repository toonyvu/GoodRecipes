import api from "./api";

export async function login(email: string, password: string) {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
}

export async function signup(
  email: string,
  username: string,
  password: string
) {
  const response = await api.post("/auth/register", {
    email,
    username,
    password,
  });

  return response.data;
}
