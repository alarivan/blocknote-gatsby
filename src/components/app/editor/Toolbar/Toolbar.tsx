import React from "react"

interface Props {}

const EditorToolbar: React.FC<Props> = () => {
  return (
    <div id="toolbar">
      <span className="ql-formats">
        <select
          className="ql-header"
          defaultValue={""}
          onChange={e => e.persist()}
        >
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option></option>
        </select>
      </span>
      <span className="ql-formats">
        <button type="button" className="ql-bold"></button>
        <button type="button" className="ql-italic"></button>
        <button type="button" className="ql-underline"></button>
        <button type="button" className="ql-link"></button>
      </span>
      <span className="ql-formats">
        <button type="button" className="ql-list" value="ordered"></button>
        <button type="button" className="ql-list" value="bullet"></button>
      </span>
      <span className="ql-formats">
        <button type="button" className="ql-clean"></button>
      </span>
      <span className="ql-formats">
        <button type="button" className="ql-copyblock">
          copy
        </button>
      </span>
    </div>
  )
}

export default EditorToolbar
