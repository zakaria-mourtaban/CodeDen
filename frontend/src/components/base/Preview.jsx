import React, { useState, useEffect } from 'react';
import "./Preview.css";


const Preview = ({ code }) => {
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${code}</body>
          <script>${code}</script>
        </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="preview">
      <iframe
        srcDoc={srcDoc}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Preview;
