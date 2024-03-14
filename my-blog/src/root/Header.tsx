import img from "../../src/assests/icons8-b-96.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-cyan-400 flex justify-between px-4 items-center">
      <span className="text-3xl flex items-center font-bold pt-2">
        <img className="h-20 w-13 pb-[13px] pl-[6px]" src={img} alt="B" />
        log
      </span>
      <div className="flex text-white">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-cyan-700 mx-6 text-xl font-bold"
              : "mx-6 text-xl font-normal"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-cyan-700 mx-6 text-xl font-bold"
              : "mx-6 text-xl font-normal"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-cyan-700 mx-6 text-xl font-bold"
              : "mx-6 text-xl font-normal"
          }
          to="/about-me"
        >
          About me
        </NavLink>
      </div>
      <button className="p-3 mr-3 font-semibold text-white bg-gray-600 hover:bg-gray-500 ">
        Sign Up
      </button>
    </nav>
  );
}

export default Header;
