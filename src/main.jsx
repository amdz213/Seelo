import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Components/home/Hero.jsx";
import Propos from "./Components/home/Propos.jsx";
import Articles from "./Components/home/Articles.jsx";
import About from "./Components/about/About.jsx";
import NotreSectioin from "./Components/about/NotreSectioin.jsx";
import Equipe from "./Components/about/Equipe.jsx";
import Rejoignez from "./Components/about/Rejoignez.jsx";
import Blog from "./Components/blog/Blog.jsx";
import BlogPart from "./Components/blog/BlogPart.jsx";
import Support from "./Components/Support/Support.jsx";
import SoutienSection from "./Components/Support/SoutienSection.jsx";
import FormSectin from "./Components/Support/FormSectin.jsx";
import Contact from "./Components/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
        children: [
          {
            path: "/",
            element: <Propos />,
            children: [{ path: "/", element: <Articles /> }],
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "",
            element: <NotreSectioin />,
            children: [
              {
                path: "",
                element: <Equipe />,
                children: [{ path: "", element: <Rejoignez /> }],
              },
            ],
          },
        ],
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
          {
            path: "",
            element: <BlogPart />,
            children: [{ path: "", element: <Articles /> }],
          },
        ],
      },
      {
        path: "/support",
        element: <Support />,
        children: [
          {
            path: "",
            element: <SoutienSection />,
            children: [{ path: "", element: <FormSectin /> }],
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
