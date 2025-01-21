import { Route, Routes } from "react-router";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ChallengesPage from "./pages/ChallengesPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import { getUser } from "./utilities/userServices";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <div className="flex">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/refs/:id" element={<HomePage user={user} />} />
          <Route path="/studies" element={<StudiesPage user={user} />} />
          <Route path="/challenges" element={<ChallengesPage user={user} />} />
          {user ? (
            <>
              <Route path="/upload" element={<UploadPage user={user} />} />
              <Route
                path="/profile/:id"
                element={<ProfilePage user={user} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/login"
                element={<AuthPage signUp={false} setUser={setUser} />}
              />
              <Route
                path="/signup"
                element={<AuthPage signUp={true} setUser={setUser} />}
              />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
