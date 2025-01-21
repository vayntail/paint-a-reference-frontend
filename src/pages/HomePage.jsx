import Header from "../components/Header";
import Pfp from "../components/Pfp";
import Study from "../components/Study";
import refServices from "../utilities/refServices";
import userServices from "../utilities/userServices";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router";

const HomePage = ({ user }) => {
  const [refs, setRefs] = useState();
  const [idRef, setIdRef] = useState();
  const [idUser, setIdUser] = useState();
  const { id } = useParams();

  const getAllRefs = async (e) => {
    try {
      const refs = await refServices.getAllRefs();
      console.log(refs);
      setRefs(refs);
    } catch (err) {
      console.log("failed to fetch refs, try again ", err);
    }
  };

  const getRefById = async (id) => {
    try {
      const ref = await refServices.getRefById(id);
      console.log(ref);
      setIdRef(ref);
    } catch (err) {
      console.log("could not fetch ref by id, try again ", err);
    }
  };

  const getUserById = async (id) => {
    try {
      const user = await userServices.getUserById(id);
      setIdUser(user);
      console.log(user);
    } catch (err) {
      console.log("could not fetch user from ref id", err);
    }
  };

  useEffect(() => {
    // get references
    getAllRefs();
    // fetch reference by id on /refs/:id route
    if (id) {
      getRefById(id);
    }
    if (idRef) {
      getUserById(idRef.uploadedBy);
      console.log(idRef);
    }
  }, [id, idRef]);

  return (
    <div className="w-full">
      <Header title="References" user={user} />
      {/* if image is clicked aka we're in the ref/:id route, show this top thing. */}
      {location.pathname.startsWith("/refs/") && id && (
        <>
          <div className="p-5 flex w-full gap-2 mb-6">
            {idRef && idUser ? (
              <>
                <div className="w-1/2">
                  <img
                    className="basis-1/2 max-h-80 w-auto m-auto"
                    src={idRef.imageUrl}
                  />
                </div>

                <div>
                  <div className="flex">
                    <div className="w-6">
                      <Pfp src={idUser.pfp} />
                    </div>

                    <p>{idUser.username}</p>
                  </div>

                  <p>{idRef.uploadDate}</p>
                  <p>{idRef.type}</p>
                  <div>
                    <h3>Studies</h3>
                    {idRef.studies.length > 0 ? (
                      <></>
                    ) : (
                      <>
                        No studies posted yet. <u>Submit a study?</u>
                      </>
                    )}
                    {/* <Study /> */}
                  </div>
                </div>
              </>
            ) : (
              <p>reference loading...</p>
            )}
          </div>
        </>
      )}
      {/* grid */}
      <div className="flex gap-4">
        {refs &&
          refs.map((ref, index) => {
            return (
              <Link to={`/refs/${ref._id}`} key={index}>
                <img className="max-h-48" src={ref.imageUrl} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
