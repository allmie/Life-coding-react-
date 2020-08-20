import React from "react";

export default class CreateContent extends React.Component {
  render() {
    // console.log("create content component");
    const { onSubmit } = this.props;
    return (
      <div>
        <h1>Create</h1>
        <form
          action="/create"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e.target.title.value, e.target.description.value);
            alert("submit");
          }}
        >
          <p>
            <input type="text" name="title" placeholder="Title" />
          </p>
          <p>
            <textarea
              name="description"
              placeholder="Description"
              cols="22"
            ></textarea>
          </p>
          <p>
            <input type="submit" value="Submit"></input>
          </p>
        </form>
      </div>
    );
  }
}
