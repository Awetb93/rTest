import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByAttr } from "../util/index";
import { store } from "./redux/index";
const setUp = (initialState = {}) => {
  const component = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(component.debug());
  return component;
};
describe("Test App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "title2", body: "some text1" },
        { title: "title3", body: "some text2" },
      ],
    };
    wrapper = setUp();
  });
  it("should render without errors", () => {
    const comp = findByAttr(wrapper, "app");
    expect(comp.length).toBe(1);
  });
});
