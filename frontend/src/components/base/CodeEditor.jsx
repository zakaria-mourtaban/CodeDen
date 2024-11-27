import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState('console.log("hello")');

  return (
    <div className="editor">
      <MonacoEditor
        height="100%"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
