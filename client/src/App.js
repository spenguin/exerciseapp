// App.js called from index.js

// Import node components 
import { Component } from "react";
import { 
  BrowserRouter, 
  Switch, 
  Route, 
  Redirect } from 'react-router-dom';

// import build pages
import SiteHeader from "./components/SiteHeader/SiteHeader";
import HomePage from "./pages/HomePage/HomePage";
import ViewCategories from "../src/pages/ViewCategories/ViewCategories";



// import SCSS
import "../src/styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/categories" component={ViewCategories} />
        </Switch>
      {/* <SiteFooter /> */}
    </BrowserRouter>
  );
}

export default App;
