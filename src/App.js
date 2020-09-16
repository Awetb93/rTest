import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import "./app.scss";
function App() {
  const tempArr = [
    {
      fname: "Awet",
      lname: "Ghirmay",
      email: "Awetb61@gmail.com",
      age: 24,
      onlineStatus: true,
    },
  ];
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render the page"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
