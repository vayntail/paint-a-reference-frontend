import * as userAPI from "./userApi";

export async function signUp(userData) {
  console.log("inside usersServices: " + userData);
  const token = await userAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  const token = await userAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUserById(id) {
  const user = userAPI.getUserById(id);
  return user;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export default { login, signUp, getUserById, logOut };
