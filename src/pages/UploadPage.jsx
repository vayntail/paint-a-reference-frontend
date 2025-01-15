import React, { useEffect, useState } from "react";
import Header from "../components/Header";
const UploadPage = ({ user }) => {
  const [file, setFile] = useState();

  // on file changed
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // conver file to base64
  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // remove "data:image/jpeg;base64,"
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  // on image uploaded
  const onFileUpload = async () => {
    // make post request
    try {
      const base64Image = await toBase64(file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Image uploaded successfully!");
        console.log(result);
      } else {
        alert("Failed to upload image.");
        console.error(result);
      }
    } catch (error) {
      alert("Error uploading image.");
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <Header title="Upload" user={user} />
      <p>please only upload high quality images!</p>
      <select>
        <option value="Reference">Reference</option>
        <option value="Study">Study</option>
      </select>
      <input type="file" accept="image/*" onChange={onFileChange} />
      <button onClick={onFileUpload}>upload</button>
    </div>
  );
};

export default UploadPage;
