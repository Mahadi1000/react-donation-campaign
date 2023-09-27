import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-10">
      <nav className="flex justify-around bg-white bg-opacity-0 backdrop-blur-sm">
        <div>
          <img src="https://i.ibb.co/Vw290qt/Logo.png" alt="" />
        </div>
        <div className="flex my-auto list-none font-semibold">
          <li className="">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="mx-5">
            <NavLink to={"/donation"}>Donation</NavLink>
          </li>
          <li>
            <NavLink to={"/Statistics"}>Statistics</NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
}
