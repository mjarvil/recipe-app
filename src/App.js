import React from 'react';
import './Styles.css';
import SearchBar from './components/Search/SearchBar';
import Filters from './components/Filter/Filters';
import Recipes from './components/Recipes/Recipes';
import { THEME } from './contants/contants';
import RecipeInformation from './components/Recipes/Recipe/Information/Information';

import { Layout, Menu } from 'antd';

function App() {
  const { Header, Content, Footer, Sider } = Layout;

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
          <Menu
            theme={THEME}
            mode="vertical"
            defaultSelectedKeys={['4']}
            style={{ padding: '20px', marginTop: '40px' }}
          >
            <Menu.Item key="1">
              <img src="https://via.placeholder.com/500x500" alt="test" />
            </Menu.Item>
            <Menu.Item key="2">
              <img src="https://via.placeholder.com/200x250" alt="test" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background layout-header">
            <SearchBar />
            <Filters />
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
