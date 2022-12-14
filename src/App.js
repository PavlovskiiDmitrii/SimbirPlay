import React from "react";
import { Layout } from "antd";
import { HeaderContent } from "./Components/HeaderContent/HeaderContent";
import { ContentContent } from "./Components/ContentContent/ContentContent";
import {FooterContent} from "./Components/FooterContent/FooterContent";
import classNames from "classnames";
import "antd/dist/antd.min.css";
import './index.scss';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderContent/>
      </Header>
      <Content className={classNames('content')}>
        <ContentContent/>
      </Content>
      <Footer className={classNames('footer')}><FooterContent/></Footer>
    </Layout>
  );
}

export default App;
