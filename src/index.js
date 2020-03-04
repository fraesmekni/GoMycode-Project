import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/cart/Cart";
import Details from "./Components/Details";
import Modal from './Components/Modal';
//import Default from "./Components/Default";
import {ProductProvider} from './Components/Context'
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <ProductProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ProductProvider>,
  rootElement
);
