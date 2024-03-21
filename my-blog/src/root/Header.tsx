import img from "../../src/assests/icons8-b-96.png";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../components/FIreBase-config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

function Header() {
  const [value, setValue] = useState<any>("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  function navigateTo() {
    localStorage.clear();
    setValue("");
  }
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);
  return (
    <nav className=" bg-sky-400 flex justify-between px-4 sticky top-0 z-10 items-center">
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
      <div>
        {value && (
          <button
            onClick={navigateTo}
            className="p-3 mr-3 text-right font-semibold text-white bg-gray-600 hover:bg-gray-500 "
          >
            Logout
          </button>
        )}
        <Link
          to="/"
          onClick={handleClick}
          className="p-3 mr-3 font-semibold text-white bg-gray-600 hover:bg-gray-500 "
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Header;
