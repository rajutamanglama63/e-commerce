import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Router from "./components/Router";
// import { useDispatch } from "react-redux";
// import { initOrders } from "./reducers/orderReducer";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initOrders());
  // }, [dispatch]);
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
