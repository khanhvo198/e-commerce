import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Collection from "./pages/collections.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/collection",
        element: <Collection />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])


export default routes
