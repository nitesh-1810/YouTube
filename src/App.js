import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Head />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
