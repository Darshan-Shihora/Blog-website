import {
  Form,
  FormMethod,
  json,
  redirect,
  useNavigate,
} from "react-router-dom";

const BlogForm: React.FC<{ method: FormMethod; event: any }> = (props) => {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form
      method={props.method}
      className="bg-gray-300 p-6 max-w-[40rem] my-8 mx-auto rounded"
    >
      <p>
        <label className="block w-full m-1 text-md" htmlFor="title">
          Title
        </label>
        <input
          className="block w-full p-1 bg-gray-100 rounded"
          id="title"
          type="text"
          name="title"
          required
        />
      </p>
      <p>
        <label className="block w-full m-1 text-md" htmlFor="image">
          Image URL
        </label>
        <input
          className="block w-full p-1 bg-gray-100 rounded"
          id="image"
          type="text"
          name="image"
          required
        />
      </p>
      <p>
        <label className="block w-full m-1 text-md" htmlFor="date">
          Date
        </label>
        <input
          className="block w-full p-1 bg-gray-100 rounded"
          id="date"
          type="date"
          name="date"
          required
        />
      </p>
      <p>
        <label className="block w-full m-1 text-md" htmlFor="description">
          Description
        </label>
        <textarea
          className="block w-full p-1 bg-gray-100 rounded"
          id="description"
          name="description"
          rows={5}
          required
        />
      </p>
      <div className="flex flex-end gap-4 mt-5">
        <button
          type="button"
          className="py-3 px-5 w-24 rounded hover:bg-sky-600 bg-sky-400 text-white"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className="py-3 px-5 w-24 rounded hover:bg-sky-600 bg-sky-400 text-white">
          Save
        </button>
      </div>
    </Form>
  );
};

export default BlogForm;

export type MyParams = {
  blogId: string;
};

export type ActionFunctionArgs<T> = {
  request: Request;
  params: T;
};

export type MyActionFunction = (
  args: ActionFunctionArgs<MyParams>
) => Promise<Response>;

export const action: MyActionFunction = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const blogData = {
    image: data.get("image"),
    title: data.get("title"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "https://blog-website-c5959-default-rtdb.firebaseio.com/blogs.json";

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }
  return redirect("/blog");
};
