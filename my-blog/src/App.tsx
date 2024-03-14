import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutMe from "./components/About-me";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "blog", element: <Blog /> },
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
