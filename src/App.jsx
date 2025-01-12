import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import HomePage from "./routers/HomePage";
import StudiesPage from "./routers/StudiesPage";
import ChallengesPage from "./routers/ChallengesPage";

function App() {
  return (
    <>
      <div className="flex">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studies" element={<StudiesPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
