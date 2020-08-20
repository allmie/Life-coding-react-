import React from "react";

class Nav extends React.Component {
  render() {
    // console.log("nav component");

    const { contents, onChangeMode, onPageSelected } = this.props;
    const lists = contents.map((element, id) => {
      return (
        <li key={id} id={element.id}>
          <a
            href={`/content/${element.title.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              onPageSelected(e.target.parentNode.id);
            }}
          >
            {element.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{lists}</ul>
        <ul>
          <li>
            <a
              href="/content/create"
              onClick={(e) => {
                e.preventDefault();
                onChangeMode("create");
              }}
            >
              Create
            </a>
          </li>
          <li>
            <a
              href="/content/update"
              onClick={(e) => {
                e.preventDefault();
                onChangeMode("update");
              }}
            >
              Update
            </a>
          </li>
          <li>
            <a
              href="/content/delete"
              onClick={(e) => {
                e.preventDefault();
                onChangeMode("delete");
              }}
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
