// src/CodeEditor.js
import React, { useState } from "react";
import  {Highlight , themes } from "prism-react-renderer";
import './CodeEditor.css'; // Assuming you have a CSS file for styles

const CodeEditor = () => {
    const [code, setCode] = useState(`
// This is a dummy code block
function greet(name) {
  console.log("Hello, " + name);
}

greet("World");
`);

  return (
    <div className="code-editor-container">
      <div className="code-editor">
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="code-input"
        />
      </div>
      <div className="code-highlight">
        <Highlight theme={themes.shadesOfPurple} code={code} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeEditor;
