import React from "react";
import Blog from "./Blog";

type Blogs = {
  id: string;
  image: string;
  title: string;
};

const BLOGS: Blogs[] = [
  {
    id: "the-girl-from-ipanema",
    image:
      "https://static.wixstatic.com/media/ae5901bd4fda41009c4cc4a19bb70d05.jpg/v1/fill/w_1175,h_661,fp_0.50_0.50,q_90,enc_auto/ae5901bd4fda41009c4cc4a19bb70d05.jpg",
    title: "The Girl from Ipanema",
  },
];

function BlogList() {
  return (
    <>
      {BLOGS.map((blog) => (
        <Blog key={blog.id} image={blog.image} title={blog.title} />
      ))}
    </>
  );
}

export default BlogList;
