import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ConsultationPage from "./pages/ConsultationPage";
import DemoPage from "./pages/DemoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "consulenza", Component: ConsultationPage },
      { path: "demo", Component: DemoPage },
    ]
  },
]);