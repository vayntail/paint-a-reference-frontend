import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <Link to={"/"}>
        <img className="nav-button" src="/icons/home-alt.svg" />
      </Link>
      <Link to={"/studies"}>
        <img className="nav-button" src="/icons/palette.svg" />
      </Link>
      <Link to={"/challenges"}>
        <img className="nav-button" src="/icons/trophy.svg" />
      </Link>
    </div>
  );
};

export default Nav;
