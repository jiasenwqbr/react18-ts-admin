import React, { useState } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Outlet,useNavigate } from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;
import MainMenu from "@/components/MainMenu"

const view: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout  className="site-layout">
        {/* 右边头部 */}
        <Header className="site-layout-background" style={{ paddingLeft: '16px' }}  >
            <Breadcrumb style={{ lineHeight:'64px' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
          <div style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center',padding:0,lineHeight:"48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default view;