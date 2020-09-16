import CheckPropsTypes from "check-prop-types";
import { checkPropTypes } from "prop-types";
export const checkProps = (component, expectedProps) => {
  const propErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propErr;
};
export const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
