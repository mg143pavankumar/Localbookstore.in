import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./pages/Homepage/Homepage";
import LoginSystem from "./pages/loginSystem/LoginSystem";
import Profilepage from "./pages/Profilepage/Profilepage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/productsPage/productPage/ProductPage";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

function App({ matchs }) {
  return (
    <div>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/profile" component={Profilepage} />
        <Route path="/loginsystem" component={LoginSystem} />
        <Route path={"/academic"} component={CategoryPage} />
        <Route path={"/product"} component={ProductPage} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/termsAndConditions" component={TermsAndConditions} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
