import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {pathsLinks} from "../../routes/routesConfig";
import {admimTypePaths} from "../../variables";
import classNames from "classnames";
import {useLocation} from "react-router-dom";
import "antd/dist/antd.min.css";
import { PlayCircleTwoTone} from "@ant-design/icons";

import './HeaderContent.scss'

export const HeaderContent = () => {
    const path = useLocation().pathname.split("/").pop();
    return (
        <div className={classNames("header")}>
            <a href="#" className={classNames("header__logo")}><PlayCircleTwoTone />SimbirPlay</a>
            <Menu mode="horizontal" defaultSelectedKeys={[path ? path : ""]}>
                {pathsLinks.map((item) => {
                    if (item.type !== admimTypePaths) {
                        return (
                            <Menu.Item key={item.path} className={classNames("menu-item")}>
                                <Link to={`/${item.path}`}>{item.linkText}</Link>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
        </div>
    );
};
