import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import "./App.css";

const defaultCode = `{
	"type": "team",
	"test": {
		"testPage": "tools/testing/run-tests.htm",
		"enabled": true
	},
    "search": {
        "excludeFolders": [
			".git",
			"node_modules",
			"tools/bin",
			"tools/counts",
			"tools/policheck",
			"tools/tfs_build_extensions",
			"tools/testing/jscoverage",
			"tools/testing/qunit",
			"tools/testing/chutzpah",
			"server.net"
        ]
    },
	"languages": {
		"vs.languages.typescript": {
			"validationSettings": [{
				"scope":"/",
				"noImplicitAny":true,
				"noLib":false,
				"extraLibs":[],
				"semanticValidation":true,
				"syntaxValidation":true,
				"codeGenTarget":"ES5",
				"moduleGenTarget":"",
				"lint": {
                    "emptyBlocksWithoutComment": "warning",
                    "curlyBracketsMustNotBeOmitted": "warning",
                    "comparisonOperatorsNotStrict": "warning",
                    "missingSemicolon": "warning",
                    "unknownTypeOfResults": "warning",
                    "semicolonsInsteadOfBlocks": "warning",
                    "functionsInsideLoops": "warning",
                    "functionsWithoutReturnType": "warning",
                    "tripleSlashReferenceAlike": "warning",
                    "unusedImports": "warning",
                    "unusedVariables": "warning",
                    "unusedFunctions": "warning",
                    "unusedMembers": "warning"
                }
			}, 
			{
				"scope":"/client",
				"baseUrl":"/client",
				"moduleGenTarget":"amd"
			},
			{
				"scope":"/server",
				"moduleGenTarget":"commonjs"
			},
			{
				"scope":"/build",
				"moduleGenTarget":"commonjs"
			},
			{
				"scope":"/node_modules/nake",
				"moduleGenTarget":"commonjs"
			}],
			"allowMultipleWorkers": true
		}
	}
}`;

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
  editorDidMountHandle(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      renderSideBySide: true
    };
    return (
      <div>
        <div className="wrapper">
          <div className="editor-container">
            <MonacoEditor
              width="800"
              height="600"
              language="json"
              value={code}
              theme="vs-dark"
              options={options}
              onChange={this.onChangeHandle}
              editorDidMount={this.editorDidMountHandle}
            />
          </div>
          <div className="view" contenteditable={true}>
            {this.state.code}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
