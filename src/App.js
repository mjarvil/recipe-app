import React, { useState } from 'react';
import './Styles.css';
import SearchBar from './components/Search/SearchBar';
import Filters from './components/Filter/Filters';
import Recipes from './components/Recipes/Recipes';
import RecipeInformation from './components/Recipes/Recipe/Information/Information';

import { Drawer, Layout, Button, Row, Col, Divider, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

function App() {
  const { Header, Content } = Layout;
  const { Title } = Typography;

  // state for the drawer component
  const [state, setState] = useState({
    visible: false,
  });

  const { visible } = state;

  const showSideDrawer = () => {
    setState({ visible: true });
  };

  const onCloseSideDrawer = (e, bind) => {
    e.preventDefault();
    setState({ visible: false });
  };

  return (
    <div className="app">
      <Layout className="layout-main">
        <Layout>
          <Header className="site-header">
            <Title
              level={3}
              className="site-title"
              style={{ color: '#f27405', marginBottom: '0', padding: '10px 0' }}
            >
              Easy Recipe Finder
            </Title>
          </Header>
          <Drawer
            className="drawer"
            title="Recipe List"
            placement="left"
            closable="true"
            onClose={onCloseSideDrawer}
            visible={visible}
            key="left"
            width="300"
            id="side"
          >
            <Row>
              <Col span={24}>
                {/* pass the function to open the drawer */}
                <Recipes displayResult={showSideDrawer} />
              </Col>
            </Row>
          </Drawer>
          <Content
            className="content"
            style={{ margin: '24px 16px 0', overflow: 'auto' }}
          >
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Row className="layout-header">
                <Col span={24}>
                  {/*  pass then function to open the drawer to searchbard 
                  component*/}
                  <SearchBar displayResult={showSideDrawer} />
                  <Filters />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Button type="text" onClick={showSideDrawer}>
                    <LeftOutlined />
                    View Recipe List
                  </Button>
                </Col>
              </Row>
              <Divider orientation="left">Recipe Information</Divider>
              <Row>
                <Col span={24}>
                  <RecipeInformation />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
