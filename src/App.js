import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
// import { languageDef, configuration, options, defaultCode } from "./sql";
// import { defaultCode, options, languageDef } from "./javascript";
import { defaultCode, options, configuration, languageDef } from "./yaml";
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

  editorWillMountHandle(monaco) {
    // this.editor = monaco;
    function createDependencyProposals() {
      // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
      // here you could do a server side lookup
      return [
        {
          label: '"lodash"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: "The Lodash library exported as Node.js modules.",
          insertText: 'lodash: "*"'
        },
        {
          label: '"express"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: "Fast, unopinionated, minimalist web framework",
          insertText: '"express": "*"'
        },
        {
          label: '"mkdirp"',
          kind: monaco.languages.CompletionItemKind.Function,
          documentation: "Recursively mkdir, like <code>mkdir -p</code>",
          insertText: '"mkdirp": "*"'
        }
      ];
    }

    if (
      !monaco.languages.getLanguages().some(({ id }) => id === "yamlGlodon")
    ) {
      // Register a new language
      monaco.languages.register({ id: "yamlGlodon" });
      // Register a tokens provider for the language
      // monaco.languages.setMonarchTokensProvider("yamlGlodon", languageDef);
      // Set the editing configuration for the language
      monaco.languages.setLanguageConfiguration("yamlGlodon", configuration);

      monaco.languages.registerCompletionItemProvider("yamlGlodon", {
        provideCompletionItems: () => {
          var suggestions = [
            {
              label: "simpleText",
              kind: monaco.languages.CompletionItemKind.Text,
              insertText: "simpleText"
            },
            {
              label: "testing",
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: "testing(${1:condition})",
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            },
            {
              label: "ifelse",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: [
                "if (${1:condition}) {",
                "\t$0",
                "} else {",
                "\t",
                "}"
              ].join("\n"),
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "If-Else Statement"
            }
          ];
          return { suggestions: suggestions };
        }
      });
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
              language="yamlGlodon"
              value={code}
              theme="vs-dark"
              options={options}
              onChange={this.onChangeHandle}
              editorWillMount={this.editorWillMountHandle}
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
