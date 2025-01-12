import { Route, Routes } from "react-router";
import { useState } from "react";
import Nav from "./components/Nav";
import HomePage from "./routers/HomePage";
import StudiesPage from "./routers/StudiesPage";
import ChallengesPage from "./routers/ChallengesPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="flex">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/studies" element={<StudiesPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
