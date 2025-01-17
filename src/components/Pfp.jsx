import React from "react";

const Pfp = ({ src }) => {
  return (
    <div>
      {/* if user.pfp exists */}
      {src ? (
        <img src={src} className="w-16 rounded-full" />
      ) : (
        <img src={"/default-pfp.jpg"} className="w-16 rounded-full" />
      )}
    </div>
  );
};

export default Pfp;
