import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "antd";
import AppHeader from "./components/Header";

import LogLayout from "./components/loglayout";
const { Header, Footer, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
              <Routes>
                <Route index element={<AppHeader />} />
                <Route path="/:id" element={<AppHeader />} />
                <Route path="/detail/:id" element={<AppHeader />} />
              </Routes>
            </Header>
            <Content className="content">
              <LogLayout />  
            </Content>
            <Footer className="footer">@copyright NPR 2022</Footer>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
