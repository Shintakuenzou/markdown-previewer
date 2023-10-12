import { useEffect, useState } from "react";
import { marked } from "marked";

import "./styles/App.css";
import { markdownContent } from "./utils/firstMarkdow";

marked.use({
  gfm: true,
});

marked.setOptions({ breaks: true });

export function App() {
  const [markdown, setMarkdown] = useState(``);

  function handleTextareaValueChange(event) {
    setMarkdown(event.target.value);
  }

  const htmlWithBr = markdown.replace(/<br>/g, "<br>");
  const html = htmlWithBr;

  useEffect(() => {
    setMarkdown(markdownContent);
  }, []);

  return (
    <main className="container">
      <h1>Markdow Previewer</h1>

      <div className="content">
        <div className="box">
          <span className="editor-name">Editor</span>
          <textarea autoFocus id="editor" onChange={(event) => handleTextareaValueChange(event)} value={markdown} />
        </div>

        <div className="box">
          <span className="editor-name">Pré-vizualização</span>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(html) }} />
        </div>
      </div>
    </main>
  );
}
