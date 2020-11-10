import React from "react";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Import Components
import Nav from "./components/Nav";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route, Switch, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      {/* We want nav to be here forever */}
      <Nav />
      {/* We want nav to be here forever */}

      <AnimatePresence exitBeforeEnter>
        {/* Otherwise they are happening simutaneosly */}
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
