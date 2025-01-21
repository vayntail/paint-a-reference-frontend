const URL = "http://localhost:8000/api/users";

export async function signUp(userData) {
  console.log("inside usersAPI: " + userData); // working
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("invalid signup");
  }
}

export async function login(credentials) {
  const response = await fetch(URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("invalid log-in");
  }
}

export async function getUserById(id) {
  const response = await fetch(URL + "/" + id, {
    method: "GET",
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("couldn't fetch user by id");
  }
}
