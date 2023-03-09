import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import Navbar from "./components/navbar/Navbar";
import { orginals, action, comedy } from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title={"NETFLIX ORGINALS"} url={orginals} />
      <RowPost title={"ACTION"} isSmall url={action} />
      <RowPost title={"COMEDY"} isSmall url={comedy} />
    </div>
  );
}

export default App;
