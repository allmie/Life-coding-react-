import React from "react";

class Subject extends React.Component {
  render() {
    // console.log("subject component");

    const { title, sub, onPageSelected } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onPageSelected();
            }}
          >
            {title}
          </a>
        </h1>
        <span>{sub}</span>
      </header>
    );
  }
}

export default Subject;
