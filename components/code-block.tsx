import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import xonokai from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai'

const CodeBlock = ({ value }) => (
  <SyntaxHighlighter language="jsx" style={xonokai}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
