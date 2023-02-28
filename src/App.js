import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

import React from "react";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
<NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
