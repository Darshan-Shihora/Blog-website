import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Home from "./components/Home";
import AboutMe from "./components/About-me";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
// import { action as addBlogAction } from "./components/BlogForm";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //   children: [
      //     { path: "", element: <Home /> },
      //     {
      //       path: "blog",
      //       element: <BlogList />,
      //     },
      //     { path: "blog/:blogId", element: <BlogDetail /> },
      //     { path: "about-me", element: <AboutMe /> },
      //   ],
      // },
      children: [
        { path: "", element: <Home /> },
        {
          path: "blog",
          element: <Outlet />,
          children: [
            { path: "", element: <BlogList /> },
            { path: ":blogId", element: <BlogDetail /> },
            { path: "new", element: <AddBlog /> },
          ],
        },
        { path: "about-me", element: <AboutMe /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
