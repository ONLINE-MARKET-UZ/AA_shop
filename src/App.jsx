import { useState, useEffect } from "react";
import { Card, Button, Modal } from "antd";
import Header from "./components/Header";
import Intro from "./components/Intro"
import Offers from './components/Offers'
import OrderForm from './components/OrderForm'

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Offers />
      <OrderForm />
    </>
  );
};

export default App;
