import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../../../util";
import ListItems from "./index";

describe("ListItem component", () => {
  describe("Checking PropsTypes ", () => {
    it("Shouldnt throw a warning", () => {
      const expectedprops = {
        title: "Example Title",
        desc: "Some Text",
      };
      const propsErr = checkProps(ListItems, expectedprops);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("component Rendering", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text",
      };
      wrapper = shallow(<ListItems {...props} />);
    });
    it("should render without Error", () => {
      const component = findByAttr(wrapper, "list-item");
      expect(component.length).toBe(1);
    });
    it("should render title", () => {
      const component = findByAttr(wrapper, "title");
      expect(component.length).toBe(1);
    });
    it("should render Desc", () => {
      const component = findByAttr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });
  describe("Should Not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text",
      };
      wrapper = shallow(<ListItems {...props} />);
    });
    it("component isnot rendered", () => {
      const component = findByAttr(wrapper, "title");
      expect(component.length).toBe(0);
    });
  });
});
