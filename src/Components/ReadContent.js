import React from "react";

export default class ReadContent extends React.Component {
  render() {
    // console.log("read content component");

    const { title, desc } = this.props;

    return (
      <article>
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    );
  }
}
