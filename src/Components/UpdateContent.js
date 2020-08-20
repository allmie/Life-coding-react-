import React from "react";

export default class UpdateContent extends React.Component {
  render() {
    // console.log("update content component");

    const { onUpdate } = this.props;
    return (
      <div>
        <h1>Update</h1>
        <form
          action="/update"
          method="post"
          onSubmit={(e) => {
            const {
              title: { value: title },
              description: { value: desc },
            } = e.target;
            e.preventDefault();
            onUpdate(title, desc);
            alert("update");
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
