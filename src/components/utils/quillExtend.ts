import { Quill } from "react-quill"

let Inline = Quill.import("blots/inline")
let Delta = Quill.import("delta")

class CopyblockBlot extends Inline {}
CopyblockBlot.blotName = "copyblock"
CopyblockBlot.tagName = "div"
CopyblockBlot.className = "copyblock"

Quill.register("formats/copyblock", CopyblockBlot)

export const formats = [
  "copyblock",
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
]

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      copyblock: function() {
        const { index, length } = this.quill.getSelection()
        const delta = new Delta()
          .retain(index)
          .insert("^c\n")
          .retain(length)
          .insert("\nc^")
        this.quill.updateContents(delta)
        this.quill.setSelection(index + length + 3)
      },
    },
  },
}
