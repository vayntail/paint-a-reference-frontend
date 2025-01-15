import Header from "../components/Header";

const ChallengesPage = ({ user }) => {
  return (
    <div className="w-full">
      <Header title="Challenges" user={user} />
      challenges coming soon!🏆
    </div>
  );
};

export default ChallengesPage;
