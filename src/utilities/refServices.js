const URL = "http://localhost:8000/api/refs";

// upload
export async function upload(uploadData) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(uploadData),
  });
  console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("could not create ref");
  }
}

// get all refs
export async function getAllRefs() {
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    return response.json();
  } catch {
    throw new Error("could not fetch references");
  }
}

// fetch reference by ID
export async function getRefById(id) {
  try {
    const response = await fetch(URL + "/" + id, {
      method: "GET",
    });
    return response.json();
  } catch {
    throw new Error("error fetching ref by id");
  }
}

export default { upload, getAllRefs, getRefById };
