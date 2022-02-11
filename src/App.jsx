import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import DetailProduct from "./Pages/Product/DetailProduct/DetailProduct";
import AllProduct from "./Pages/Product/AllProduct/AllProduct";
import WhatsApp from "./Components/WhatsApp/WhatsApp";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchLoading();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader-spinner">
          <RingLoader color={"#800000"} loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <HashRouter basename="/">
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/detailproduct/:id" component={DetailProduct} />
              <Route path="/product" component={AllProduct} />
            </Switch>
            <Footer />
            <div className="whatsapp">
              <WhatsApp/>
            </div>
          </HashRouter>
        </div>
      )}
    </div>
  );
}

export default App;