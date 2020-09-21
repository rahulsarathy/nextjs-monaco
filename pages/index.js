import React from 'react';
import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false });

export default function Index() {
  return (
    <div>
      <h1>Testing NextJS with Monaco Editor</h1>
      <div>
        <MonacoEditor
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
