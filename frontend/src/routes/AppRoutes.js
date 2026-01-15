import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";

import LandingPage from "../components/LandingPage";
import PredictionPage from "../components/PredictionPage";
import AboutPage from "../components/AboutPage";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Title level={3} style={{ color: "white", margin: "0 20px 0 0" }}>
            AllLife Personal Loan Predictor
          </Title>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["landing"]}>
            <Menu.Item key="landing">
              <Link to="/">Landing</Link>
            </Menu.Item>
            <Menu.Item key="prediction">
              <Link to="/predict">Prediction</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/predict" element={<PredictionPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
