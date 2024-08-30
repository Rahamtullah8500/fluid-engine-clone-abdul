import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./store/Store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Template from "./pages/template/Template.jsx";
import PreviewSection from "./pages/previewSection/PreviewSection.jsx";
import AuthPages from "./pages/auth/AuthPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />}></Route>
      <Route path="template" element={<Template />}></Route>
      <Route path="/preview/:title" element={<PreviewSection />} />
      <Route path="auth" element={<AuthPages />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
