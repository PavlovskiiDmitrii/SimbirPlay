import React from "react";
import { Route, Routes } from "react-router-dom";
import { pathsContent } from "../../routes/routesConfig";
import "antd/dist/antd.min.css";

export const ContentContent = () => {
  return (
    <Routes>
      {pathsContent.map((item) => (
        <Route key={item.path} path={`/${item.path}`} element={item.page} />
      ))}
    </Routes>
  );
};
