import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";
import { findByAttr, checkProps } from "../../../util/index";
import { checkPropTypes } from "prop-types";
import Headline from "./index";
const setUp = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};
describe("Headline component", () => {
  describe("have porps", () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: "test header", desc: "test desc" };
      wrapper = setUp(props);
    });
    it("should render without error", () => {
      const component = findByAttr(wrapper, "headLineComponent");
      expect(component.length).toBe(1);
    });
    it("should render H1", () => {
      const h1 = findByAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("should render desc", () => {
      const desc = findByAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Checking propsType", () => {
    it("should nto threw a warning", () => {
      const expectedProps = {
        header: "test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fname: "Test Fname",
            lname: "Test lname",
            email: "AWE@gmail.com",
            age: 13,
            onlineStatus: true,
          },
        ],
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("should not render ", () => {
      const component = findByAttr(wrapper, "headLineComponent");
      expect(component.length).toBe(0);
    });
  });
});
