import React from "react";
import { findByAttr, checkProps } from "../../util/index";
import SharedButton from "./index";
import { shallow } from "enzyme";
const set = (
  props = { buttonText: "Example button test", emitEvent: () => {} }
) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};
describe("Sharedbutton", () => {
  describe("checking Proptypes", () => {
    it("shouldnt throw a warning", () => {
      const expextedProps = {
        buttonText: "Example button test",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expextedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Render a button", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = set();
    });
    it("button must be rendered", () => {
      const component = findByAttr(wrapper, "button1");
      expect(component.length).toBe(1);
    });
  });
});
