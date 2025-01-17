import Header from "../components/Header";
import refServices from "../utilities/refServices";
import { useEffect, useState } from "react";

const HomePage = ({ user }) => {
  const [refs, setRefs] = useState();
  const getAllRefs = async (e) => {
    try {
      const refs = await refServices.getAllRefs();
      console.log(refs);
      setRefs(refs);
    } catch (err) {
      console.log("failed to fetch refs, try again ", err);
    }
  };

  useEffect(() => {
    // get references
    getAllRefs();
  }, []);

  return (
    <div className="w-full">
      <Header title="References" user={user} />
      <div className="flex gap-4">
        {refs &&
          refs.map((ref, index) => {
            return (
              <Link>
                <img className="h-48" key={index} src={ref.imageUrl} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
