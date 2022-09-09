import React from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "../../routes/routesConfig";
import "antd/dist/antd.min.css";

export const ContentContent = () => {
  return (
    <Routes>
      {paths.map((item) => (
        <Route path={`/${item.path}`} element={item.page} />
      ))}
    </Routes>
  );
};
