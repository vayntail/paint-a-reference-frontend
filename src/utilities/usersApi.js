const API_URL = "http://localhost:8000/api/users";

export async function signUp(userData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("invalid signup");
  }
}

export async function login(credentials) {
  const response = await fetch(API_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("invalid log-in");
  }
}
