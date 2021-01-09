import React from 'react';
import './Styles.css';
import SearchBar from './components/Search/SearchBar';
import Filters from './components/Filter/Filters';
import Recipes from './components/Recipes/Recipes';
import { THEME } from './contants/contants';
import RecipeInformation from './components/Recipes/Recipe/Information/Information';

import { Layout, Menu, Input, Row, Col } from 'antd';

function App() {
  const { Header, Content, Footer, Sider } = Layout;

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <div className="app">
      {/* <section className="recipe-result">
        <div className="search-filter">
          <SearchBar />
          <Filters />
          <Recipes />
        </div>
      </section>
      <section className="recipe-info">
        <RecipeInformation />
      </section> */}

      <Layout className="layout-main">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <Menu theme={THEME} mode="inline" defaultSelectedKeys={['4']}>
            {/* <Menu.Item key="1">nav 1</Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background layout-header">
            <Row>
              <Col span={16} offset={4}>
                <Search
                  placeholder="What Are you Craving?"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
              </Col>
            </Row>
          </Header>
          <Content className="content">
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
