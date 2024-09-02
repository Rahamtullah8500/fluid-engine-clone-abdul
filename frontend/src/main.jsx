import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import App from "./App.jsx";
import "./index.css";
import Store from "./store/Store";

const Home = React.lazy(() => import("./pages/home/Home.jsx"));
const Template = React.lazy(() => import("./pages/template/Template.jsx"));
const PreviewSection = React.lazy(() => import("./pages/previewSection/PreviewSection.jsx"));
const AuthPages = React.lazy(() => import("./pages/auth/AuthPage.jsx"));
const ProtectedRoute = React.lazy(() => import("./components/protectedRoute/ProtectedRoute.jsx"));
const WebsiteBuilder = React.lazy(() => import("./pages/websiteBuilder/WebsiteBuilder.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }></Route>
        <Route path="template" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Template />
          </Suspense>
        }></Route>
        <Route path="/preview/:title" element={
          <Suspense fallback={<div>Loading...</div>}>
            <PreviewSection />
          </Suspense>
        } />
        <Route path="auth" element={
          <Suspense fallback={<div>Loading...</div>}>
            <AuthPages />
          </Suspense>
        }></Route>
        <Route path="" element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute />
          </Suspense>
        }>
          <Route path="/websiteBuilder" element={
            <Suspense fallback={<div>Loading...</div>}>
              <WebsiteBuilder />
            </Suspense>
          } />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
