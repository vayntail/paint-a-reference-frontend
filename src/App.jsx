import { Route, Routes } from "react-router";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ChallengesPage from "./pages/ChallengesPage";
import UploadPage from "./pages/UploadPage";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <div className="flex">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/studies" element={<StudiesPage user={user} />} />
          <Route path="/challenges" element={<ChallengesPage user={user} />} />
          {user ? (
            <Route path="/upload" element={<UploadPage user={user} />} />
          ) : (
            <></>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
