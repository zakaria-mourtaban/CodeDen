import { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import "./CodeEditor.css";

const CodeEditor = ({ code, setCode }) => {
    const handleEditorChange = (value) => {
        setCode(value);
      };

  return (
    <div className="editor">
      <MonacoEditor
        height="100vh"
        defaultLanguage="javascript"
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
