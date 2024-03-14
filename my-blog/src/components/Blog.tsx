import { Link } from "react-router-dom";
import img from "../assests/icons8-administrator-male-96.png";
import heartImg from "../assests/icons8-heart-16.png";
import eyeImg from "../assests/icons8-eye-16.png";
import messageImg from "../assests/icons8-message-16.png";

function Blog() {
  return (
    <div className=" block m-auto h-auto w-[60%] border-2 border-gray-100 my-8 pb-4 box-border shadow-sm">
      <Link to="/blog/the-girl-from-ipanema">
        <img
          className=""
          src="https://static.wixstatic.com/media/ae5901bd4fda41009c4cc4a19bb70d05.jpg/v1/fill/w_1175,h_661,fp_0.50_0.50,q_90,enc_auto/ae5901bd4fda41009c4cc4a19bb70d05.jpg"
          alt=""
        />
      </Link>
      <div className="flex m-auto my-6 ml-6">
        <img className="size-14 mr-2" src={img} alt="" />
        <div className="text-start items-center text-gray-400">
          <p>Admin</p>
          <p>Mar 25, 2023</p>
        </div>
      </div>
      <Link
        to="/blog/the-girl-from-ipanema"
        className="ml-6 text-3xl font-serif font-medium hover:text-sky-500"
      >
        The Girl from Ipanema
      </Link>
      <div className="border-t-2 flex mx-6 my-4 pt-3 relative">
        <p className="flex pr-4">
          <img className="pr-[3px]" src={eyeImg} alt="" />
          100
        </p>
        <p className="flex">
          <img className="pr-[4px]" src={messageImg} alt="" />2
        </p>
        <p className="flex absolute left-[96%]">
          <img className="pr-[4px]" src={heartImg} alt="" />
          48
        </p>
      </div>
    </div>
  );
}

export default Blog;
