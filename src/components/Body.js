import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login1";
import ShimmerMovieDetails from "./ShimmerMovieDetails";
import Watch from "./Watch";
import MainContainerShimmer from "../ShimmerCard/MainContainerShimmer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/shimmer",
      element: <MainContainerShimmer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
