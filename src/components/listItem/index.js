import React from "react";
import PropTypes from "prop-types";

export default function ListItems({ title, desc }) {
  if (!title) {
    return null;
  }
  return (
    <div data-test="list-item">
      <h2 data-test="title">{title}</h2>
      <p data-test="desc">{desc}</p>
    </div>
  );
}

ListItems.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
