import React from "react";
import "App.css";
import Subject from "Components/Subject";
import Nav from "Components/Nav";
import ReadContent from "Components/ReadContent";
import CreateContent from "Components/CreateContent";
import UpdateContent from "Components/UpdateContent";
import DeleteComponent from "Components/DeleteContent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "main",
      main: {
        title: "Welcome to your visit",
        desc: "Enjoy this site",
      },
      selectedId: 0,
      title: "WEB",
      desc: "World Wide Web!",
      contents: [
        { id: 1, title: "HTML", desc: "html html html" },
        { id: 2, title: "CSS", desc: "css css css" },
        { id: 3, title: "JAVASCRIPT", desc: "javascript javascript" },
      ],
    };
  }
  render() {
    console.log("app component");

    const { mode, main, selectedId, contents, title, desc } = this.state;
    let contentTitle,
      contentDesc,
      setComponent = null;
    if (mode === "main") {
      contentTitle = main.title;
      contentDesc = main.desc;

      setComponent = <ReadContent title={contentTitle} desc={contentDesc} />;
    } else if (mode === "read") {
      const selectedContent = contents.filter(
        (element) => element.id === Number(selectedId)
      );
      selectedContent.map((element) => {
        contentTitle = element.title;
        contentDesc = element.desc;
      });

      setComponent = <ReadContent title={contentTitle} desc={contentDesc} />;
    } else if (mode === "create") {
      setComponent = (
        <CreateContent
          onSubmit={(title, desc) => {
            let newId = contents.length + 1;
            // 중간 목록이 사라지면서 id가 중복되는 경우에 대해 조건문
            // but contents_id 값은 수정이 안되기 때문에 중복 되는 경우가 안 나타날 것으로 보임
            // const checkId = contents.find((element) => element.id === newId);
            // if (checkId) {
            //   newId += 1;
            // }

            const newContents = contents.concat({
              id: newId,
              title,
              desc,
            });

            this.setState({
              contents: newContents,
              mode: "read",
              selectedId: newId,
            });
          }}
        />
      );
    } else if (mode === "update") {
      setComponent = (
        <UpdateContent
          onUpdate={(title, desc) => {
            const newContents = contents.map((element) => {
              if (element.title === title) {
                element.title = title;
                element.desc = desc;
              }
              return element;
            });
            this.setState({
              contents: newContents,
            });
          }}
        />
      );
    } else if (mode === "delete") {
      setComponent = (
        <DeleteComponent
          onDeleteSubmit={(title) => {
            const newContents = contents.filter(
              (element) => element.title !== title
            );
            this.setState({
              contents: newContents,
            });
          }}
        />
      );
    }

    return (
      <div className="App">
        <Subject
          title={title}
          sub={desc}
          onPageSelected={(e) => {
            this.setState({
              mode: "main",
            });
          }}
        />
        <Nav
          contents={contents}
          onPageSelected={(id) => {
            this.setState({
              mode: "read",
              selectedId: id,
            });
          }}
          onChangeMode={(text) => {
            this.setState({
              mode: text,
            });
          }}
        />
        {setComponent}
      </div>
    );
  }
}
