import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </>
  );
};

export default App;
