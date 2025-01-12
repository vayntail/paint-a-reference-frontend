import Header from "../components/Header";

const HomePage = ({ user }) => {
  return (
    <div className="w-full">
      <Header title="References" user={user} />
    </div>
  );
};

export default HomePage;
