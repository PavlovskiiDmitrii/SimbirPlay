import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { admimTypePaths } from "./variables";
import { paths } from "./routes/routesData";
import classNames from "classnames";
import "antd/dist/antd.min.css";
import './index.scss';

const { Header, Footer, Content } = Layout;

const headerLinks = () => {
  return paths.map((item) => {
    if (item.type !== admimTypePaths) {
      return (
        <Menu.Item key={item.path}  className={classNames('menu-item')}>
          <Link to={`/${item.path}`}>{item.linkText}</Link>
        </Menu.Item>
      );
    }
  });
};

function App() {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" defaultSelectedKeys={[""]}>
          {headerLinks()}
        </Menu>
      </Header>
      <Content className={classNames('content')}>
        <Routes>
          {paths.map((item) => (
            <Route path={`/${item.path}`} element={item.page} />
          ))}
        </Routes>
      </Content>
      <Footer className={classNames('footer')}>Footer</Footer>
    </Layout>
  );
}

export default App;
