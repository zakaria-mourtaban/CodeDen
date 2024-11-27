import { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("hello")');


  return (
    <div className="editor">
      <MonacoEditor
        height="100vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
