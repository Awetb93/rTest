import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import SharedButton from "./button/index";
import ListItem from "./components/listItem/index";
import { fetch } from "./redux/index";
import { useDispatch, useSelector } from "react-redux";
import "./app.scss";

function App() {
  const dispatch = useDispatch();

  const list = useSelector(state => state);
  console.log(list);
  if (list.posts) {
    console.log(list.posts.length);
  }

  const tempArr = [
    {
      fname: "Awet",
      lname: "Ghirmay",
      email: "Awetb61@gmail.com",
      age: 24,
      onlineStatus: true,
    },
  ];
  const fetchPost = () => {
    dispatch(fetch());
  };
  const configButton = {
    buttonText: "Get Post",
    emitEvent: fetchPost,
  };

  return (
    <div className="App" data-test="app">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render the page"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {list.posts && (
          <div>
            {list.posts.map((post, index) => {
              console.log(post);
              const { title, body } = post;
              const configItem = { title, desc: body };
              return <ListItem key={index} {...configItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
