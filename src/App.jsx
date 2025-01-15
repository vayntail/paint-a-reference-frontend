import { Route, Routes } from "react-router";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import ChallengesPage from "./pages/ChallengesPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";

function App() {
  const testUser = {
    username: "Vayntail",
    pfp: "https://i.pinimg.com/736x/33/ad/85/33ad8534500596f492edaa149a7b7322.jpg",
    email: "",
    password: "",
    bio: "this is my bio :)",
    favRefs: [],
  };
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="flex">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
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
              <Route path="/login" element={<AuthPage signUp={false} />} />
              <Route path="/signup" element={<AuthPage signUp={true} />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
