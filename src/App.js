import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
// import { languageDef, configuration, options, defaultCode } from "./sql";
import { defaultCode, options, languageDef } from "./javascript";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle(value, e) {
    this.setState({
      code: value
    });
  }

  editorWillMountHandle(editor, monaco) {
    // this.editor = monaco;
    if (!editor.languages.getLanguages().some(({ id }) => id === "sqlGlodon")) {
      // Register a new language
      editor.languages.register({ id: "sqlGlodon" });
      // Register a tokens provider for the language
      editor.languages.setMonarchTokensProvider("sqlGlodon", languageDef);
      // Set the editing configuration for the language
      // editor.languages.setLanguageConfiguration("sqlGlodon", configuration);
    }
  }
  editorDidMountHandle(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  render() {
    const code = this.state.code;
    // const options = {
    //   selectOnLineNumbers: true,
    //   renderSideBySide: true
    // };
    return (
      <div>
        <div className="wrapper" style={{ width: 800, margin: "auto" }}>
          <div className="editor-container">
            <MonacoEditor
              width="800"
              height="600"
              language="javascript"
              value={code}
              theme="vs-dark"
              options={options}
              onChange={this.onChangeHandle}
              // editorWillMount={this.editorWillMountHandle}
              editorDidMount={this.editorDidMountHandle}
            />
          </div>
          {/* <div className="view" contenteditable={true}>
            {this.state.code}
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
