import React from "react";
import { Link } from "react-router";

const ImagesGrid = ({ images }) => {
  return (
    <div className="flex gap-4">
      {images &&
        images.map((image, index) => {
          return (
            <Link to={`/refs/${image._id}`} key={index}>
              <img className="max-h-48" src={image.imageUrl} />
            </Link>
          );
        })}
    </div>
  );
};

export default ImagesGrid;
