import React from "react";

export default class DeleteComponent extends React.Component {
  render() {
    // console.log("delete content compoenent")

    const { onDeleteSubmit } = this.props;

    return (
      <article>
        <h1>Delete</h1>
        <form
          action="/delete"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            onDeleteSubmit(e.target.title.value);
          }}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="Insert delete-title"
            ></input>
          </p>
          <input type="submit" value="Submit"></input>
        </form>
      </article>
    );
  }
}
