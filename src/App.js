import React, { useEffect } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import { fetch } from "./redux/index";
import { useDispatch, useSelector } from "react-redux";
import "./app.scss";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  const list = useSelector(state => state);
  console.log(list);
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
