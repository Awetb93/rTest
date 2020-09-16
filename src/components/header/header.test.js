import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByAttr } from "../../../util/index";
const set = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};
describe("test header Component", () => {
  let component;
  beforeEach(() => {
    component = set();
  });
  it("should render header", () => {
    const wrapper = findByAttr(component, "headerCom");
    expect(wrapper.length).toBe(1);
  });
  it("should render logo", () => {
    const logo = findByAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
