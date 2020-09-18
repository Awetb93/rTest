import React from "react";
import PropTypes from "prop-types";
export default function SharedButton(props) {
  const submitEvent = () => {
    if (props.emitEvent) {
      props.emitEvent();
    }
  };
  const { buttonText } = props;
  return (
    <button data-test="button1" onClick={() => submitEvent()}>
      {buttonText}
    </button>
  );
}
SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
