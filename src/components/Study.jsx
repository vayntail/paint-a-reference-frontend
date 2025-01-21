import React from "react";
import Pfp from "./Pfp";

const Study = ({ study }) => {
  return (
    <>
      <div className="flex">
        <Pfp src={study.uploadedBy.pfp} />
        {study.uploadedBy.username}
      </div>
    </>
  );
};

export default Study;
