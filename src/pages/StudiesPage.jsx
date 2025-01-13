import Header from "../components/Header";

const StudiesPage = ({ user }) => {
  return (
    <div className="w-full">
      <Header title="Studies" user={user} />
    </div>
  );
};

export default StudiesPage;
