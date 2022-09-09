import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { paths } from "../../routes/routesConfig";
import { admimTypePaths } from '../../variables'
import classNames from "classnames";
import "antd/dist/antd.min.css";

export const HeaderContent = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={[""]}>
      {paths.map((item) => {
        if (item.type !== admimTypePaths) {
          return (
            <Menu.Item key={item.path} className={classNames("menu-item")}>
              <Link to={`/${item.path}`}>{item.linkText}</Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};
