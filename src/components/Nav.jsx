import { Link } from "react-router";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/studies"}>
        <button>Studies</button>
      </Link>
      <Link to={"challenges"}>
        <button>Challenges</button>
      </Link>
    </div>
  );
};

export default Nav;
