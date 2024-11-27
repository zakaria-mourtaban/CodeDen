import React, { useState, useEffect } from 'react';
import "./Preview.css";

const Preview = ({ code }) => {
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    if (code) {
      const timeout = setTimeout(() => {
        setSrcDoc(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Preview</title>
              <style>
                body { background-color: black; color: white; margin: 0; padding: 20px; }
              </style>
            </head>
            <body>
              <div id="output"></div>
              <script>
                try {
                  const outputElement = document.getElementById('output');
                  outputElement.innerHTML = '';
                  
                  const originalConsoleLog = console.log;
                  console.log = (message) => {
                    outputElement.innerHTML += message + '<br>';
                  };
                  
                  ${code}
                  
                  console.log = originalConsoleLog;
                } catch (error) {
                  console.error('Error executing code:', error);
                }
              </script>
            </body>
          </html>
        `);
      }, 500);
  
      return () => clearTimeout(timeout);
    }
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
