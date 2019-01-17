function createDependencyProposals(monaco) {
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

export const getCompletionItems = monaco => [
  {
    label: "title",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "title: "
  },
  {
    label: "description",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "description: "
  },
  {
    label: "type",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "type: "
  },
  {
    label: "required",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "required: \n\t- "
  },
  {
    label: "properties",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "properties: \n\t"
  },
  {
    label: "minProperties",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "minProperties: "
  },
  {
    label: "maxProperties",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "maxProperties: "
  },
  {
    label: "additionalProperties",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "additionalProperties: "
  },

  //array
  {
    label: "minItems",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "minItems: "
  },
  {
    label: "maxItems",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "maxItems: "
  },
  {
    label: "uniqueItems",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "uniqueItems: "
  },

  //number
  {
    label: "multipleOf",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "multipleOf: "
  },
  {
    label: "minmum",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "minmum: "
  },
  {
    label: "maximum",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "maximum: "
  },
  {
    label: "exclusiveMinimum",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "exclusiveMinimum: "
  },
  {
    label: "exclusiveMaximum",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "exclusiveMaximum: "
  },

  //string
  {
    label: "minLength",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "minLength: "
  },
  {
    label: "maxLength",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "maxLength: "
  },

  {
    label: "uniqueItems",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "uniqueItems: "
  },

  {
    label: "type: object",
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: ["type: object", "properties: \n\t", "required: \n\t- "].join(
      "\n"
    ),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
  },
  {
    label: "type: array",
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: ["type: array", "items: \n\t", "minItem: 1"].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
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
    insertText: ["if (${1:condition}) {", "\t$0", "} else {", "\t", "}"].join(
      "\n"
    ),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "If-Else Statement"
  }
];

// export const defaultCode = `{\n\t\"dependencies\": {\n\t\t\n\t}\n}\n`;
export const defaultCode = ``;

export const options = {
  lineNumbers: true,
  scrollBeyondLastLine: false,
  readOnly: false,
  fontSize: 12
};
export const configuration = {
  comments: {
    lineComment: "#"
  },
  brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    offSide: true
  }
};
export const languageDef = {
  // Set defaultToken to invalid to see what you do not tokenize yet
  defaultToken: "invalid",
  tokenPostfix: ".yaml",
  ignoreCase: true,

  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],

  keywords: [
    "true",
    "True",
    "TRUE",
    "false",
    "False",
    "FALSE",
    "null",
    "Null",
    "Null",
    "~"
  ],

  numberInteger: /(?:0|[+-]?[0-9]+)/,
  numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
  numberOctal: /0o[0-7]+/,
  numberHex: /0x[0-9a-fA-F]+/,
  numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
  numberNaN: /\.(?:nan|Nan|NAN)/,
  numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,

  escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,

  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@comment" },

      // Directive
      [/%[^ ]+.*$/, "meta.directive"],

      // Document Markers
      [/---/, "operators.directivesEnd"],
      [/\.{3}/, "operators.documentEnd"],

      // Block Structure Indicators
      [/[-?:](?= )/, "operators"],

      { include: "@anchor" },
      { include: "@tagHandle" },
      { include: "@flowCollections" },
      { include: "@blockStyle" },

      // Numbers
      [/@numberInteger(?![ \t]*\S+)/, "number"],
      [/@numberFloat(?![ \t]*\S+)/, "number.float"],
      [/@numberOctal(?![ \t]*\S+)/, "number.octal"],
      [/@numberHex(?![ \t]*\S+)/, "number.hex"],
      [/@numberInfinity(?![ \t]*\S+)/, "number.infinity"],
      [/@numberNaN(?![ \t]*\S+)/, "number.nan"],
      [/@numberDate(?![ \t]*\S+)/, "number.date"],

      // Key:Value pair
      [
        /(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,
        ["type", "white", "operators", "white"]
      ],

      { include: "@flowScalars" }

      // String nodes
      // [
      //   // /.+$/,
      //   /[\w@#$]+/,
      //   {
      //     cases: {
      //       "@keywords": "keyword",
      //       "@default": "string"
      //     }
      //   }
      // ]
    ],

    // Flow Collection: Flow Mapping
    object: [
      // { include: "@whitespace" },
      // { include: "@comment" },
      // // Flow Mapping termination
      // [/\}/, "@brackets", "@pop"],
      // // Flow Mapping delimiter
      // [/,/, "delimiter.comma"],
      // // Flow Mapping Key:Value delimiter
      // [/:(?= )/, "operators"],
      // // Flow Mapping Key:Value key
      // [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, "type"],
      // // Start Flow Style
      // { include: "@flowCollections" },
      // { include: "@flowScalars" },
      // // Scalar Data types
      // { include: "@tagHandle" },
      // { include: "@anchor" },
      // { include: "@flowNumber" },
      // // Other value (keyword or string)
      // [
      //   /[^\},]+/,
      //   {
      //     cases: {
      //       "@keywords": "keyword",
      //       "@default": "string"
      //     }
      //   }
      // ]
    ],

    // Flow Collection: Flow Sequence
    array: [
      { include: "@whitespace" },
      { include: "@comment" },

      // Flow Sequence termination
      [/\]/, "@brackets", "@pop"],

      // Flow Sequence delimiter
      [/,/, "delimiter.comma"],

      // Start Flow Style
      { include: "@flowCollections" },
      { include: "@flowScalars" },

      // Scalar Data types
      { include: "@tagHandle" },
      { include: "@anchor" },
      { include: "@flowNumber" },

      // Other value (keyword or string)
      [
        /[^\],]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "string"
          }
        }
      ]
    ],

    // First line of a Block Style
    multiString: [[/^( +).+$/, "string", "@multiStringContinued.$1"]],

    // Further lines of a Block Style
    //   Workaround for indentation detection
    multiStringContinued: [
      [
        /^( *).+$/,
        {
          cases: {
            "$1==$S2": "string",
            "@default": { token: "@rematch", next: "@popall" }
          }
        }
      ]
    ],

    whitespace: [[/[ \t\r\n]+/, "white"]],

    // Only line comments
    comment: [[/#.*$/, "comment"]],

    // Start Flow Collections
    flowCollections: [
      [/\[/, "@brackets", "@array"],
      [/\{/, "@brackets", "@object"]
    ],

    // Start Flow Scalars (quoted strings)
    flowScalars: [
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/'[^']*'/, "string"],
      [/"/, "string", "@doubleQuotedString"]
    ],

    doubleQuotedString: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, "string", "@pop"]
    ],

    // Start Block Scalar
    blockStyle: [[/[>|][0-9]*[+-]?$/, "operators", "@multiString"]],

    // Numbers in Flow Collections (terminate with ,]})
    flowNumber: [
      [/@numberInteger(?=[ \t]*[,\]\}])/, "number"],
      [/@numberFloat(?=[ \t]*[,\]\}])/, "number.float"],
      [/@numberOctal(?=[ \t]*[,\]\}])/, "number.octal"],
      [/@numberHex(?=[ \t]*[,\]\}])/, "number.hex"],
      [/@numberInfinity(?=[ \t]*[,\]\}])/, "number.infinity"],
      [/@numberNaN(?=[ \t]*[,\]\}])/, "number.nan"],
      [/@numberDate(?=[ \t]*[,\]\}])/, "number.date"]
    ],

    tagHandle: [[/\![^ ]*/, "tag"]],

    anchor: [[/[&*][^ ]+/, "namespace"]]
  }
};
