import { useState, useEffect } from "react";
import { Card, Button, Modal } from "antd";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Offers from "./components/Offers";
import OrderForm from "./components/OrderForm";
import Layout from "./components/Layout";
// import FullCard from './components/UI/Cards/FullCard';
// import MultiCard from "./components/UI/Cards/MultiCard";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Offers />
      <OrderForm />
      <Layout />

      <Footer />
    </>
  );
};

export default App;
