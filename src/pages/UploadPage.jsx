import React, { useEffect, useState } from "react";
import Header from "../components/Header";
const UploadPage = ({ user }) => {
  const [file, setFile] = useState();

  // on file changed
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Convert file to Base64
  //   const toBase64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => resolve(reader.result.split(",")[1]); // Remove "data:image/jpeg;base64,"
  //       reader.onerror = (error) => reject(error);
  //     });
  //   };

  //   // on image uploaded
  //   const onFileUpload = async () => {
  //     const apiKey = import.meta.env.VITE_API_KEY;
  //     console.log(apiKey);
  //     const base64Image = await toBase64(file);

  //     const formData = new FormData();
  //     // formData.set("key", apiKey);
  //     formData.append("image", base64Image); // add image to formData

  //     console.log(formData);

  //     // make post request
  //     try {
  //       const response = await fetch(
  //         `https://api.imgbb.com/1/upload?key=${apiKey}`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ image: base64Image }),
  //         }
  //       );

  //       const result = await response.json();
  //       if (result.success) {
  //         alert("Image uploaded successfully!");
  //         console.log(result.data.url);
  //       } else {
  //         alert("Failed to upload image.");
  //         console.error(result);
  //       }
  //     } catch (error) {
  //       alert("Error uploading image.");
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="w-full">
      <Header title="Upload" user={user} />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <button onClick={onFileUpload}>upload</button>
    </div>
  );
};

export default UploadPage;
