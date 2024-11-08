import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/dashboard/Dashboard";
import Comments from "pages/dashboard/components/comments/comments";
import Posts from "pages/dashboard/components/posts/posts";
import Home from "pages/home/Home";
import MyComponent from "pages/my-component/MyComponent";
import Profile from "components/profile/Profile";
import Layout from "layouts/Layout";

const  Routers: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index path="posts" element={<Posts />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="my-component" element={<MyComponent />} />
          <Route path="user" element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
}

export default Routers;
