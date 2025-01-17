import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import refServices from "../utilities/refServices";

const UploadPage = ({ user }) => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [formData, setFormData] = useState({
    imageUrl: "",
    type: "Film", // default
    uploadedBy: {},
  });

  // create ref to hidden file input element (for custom styling)
  const hiddenFileInput = useRef(null);

  // manually click the file input when custom button is clicked
  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  // on file changed
  const onFileChange = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);

    // call file upload
    if (e.target.files[0]) {
      await uploadFile(e.target.files[0]);
    }
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
  const uploadFile = async (file) => {
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
        setImageUrl(result.data.display_url);

        // set image
      } else {
        alert("Failed to upload image.");
        console.error(result);
      }
    } catch (error) {
      alert("Error uploading image.");
      console.error(error);
    }
  };

  // on the form uploaded / submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...formData, imageUrl: imageUrl, uploadedBy: user };
      const ref = await refServices.upload(submitData);
      console.log(ref);
      window.location.href = "http://localhost:5173/"; // refresh page
    } catch (err) {
      console.log("ref upload failed");
    }
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div className="w-full">
      <Header title="Upload" user={user} />
      <div className="flex flex-col items-center">
        <p>please only upload high quality images!</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <button className="button-upload" onClick={handleClick}>
            <div className="w-56 h-56 bg-slate-300 rounded">
              {imageUrl && <img src={imageUrl} className="h-full m-auto" />}
            </div>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={hiddenFileInput}
            onChange={onFileChange}
            className="hidden"
          />
          <br />
          <select name="type" onChange={handleChange}>
            <option value="Film">Film</option>
            <option value="Game">Game</option>
            <option value="Animation">Animation</option>
            <option value="Photo">Photo</option>
          </select>
          <button type="submit" onClick={() => {}} className={"signin-button"}>
            upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
