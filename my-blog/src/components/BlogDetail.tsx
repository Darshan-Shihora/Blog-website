import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import BlogItem from "./BlogItem";
import { Suspense } from "react";
import { ActionFunctionArgs, MyParams } from "./BlogForm";

function BlogDetail() {
  const blog: any = useRouteLoaderData("blog-detail");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={blog}>
        {(loadedBlog) => <BlogItem blog={loadedBlog} />}
      </Await>
    </Suspense>
  );
}

export default BlogDetail;

async function loadEvent(id: string) {
  const response = await fetch(
    "https://blog-website-c5959-default-rtdb.firebaseio.com/blogs/" +
      id +
      ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected blog." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log(resData);

    return resData;
  }
}

export const loader = async ({ params }: { params: any }) => {
  const id = params.blogId;
  console.log(id);

  return defer({
    blog: await loadEvent(id),
  });
};

type MyActionFunction = (
  args: ActionFunctionArgs<MyParams>
) => Promise<Response>;

export const action: MyActionFunction = async ({ request, params }) => {
  const blogId = params.blogId;
  const response = await fetch(
    "https://blog-website-c5959-default-rtdb.firebaseio.com/blogs/" +
      blogId +
      ".json",
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/blog");
};
