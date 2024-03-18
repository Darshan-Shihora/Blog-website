import { useRouteLoaderData } from "react-router-dom";
import BlogForm from "./BlogForm";

function EditBlog() {
  const data: any = useRouteLoaderData("blog-detail");
  return <BlogForm method="patch" event={data.event} />;
}

export default EditBlog;
