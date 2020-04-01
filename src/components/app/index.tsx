import React from "react"
import { Router } from "@reach/router"
import { NotesProvider } from "../../context/NotesContext"
import Main from "../../components/app/routes/main"
import Editor from "../../components/app/routes/editor"
import View from "./routes/view"

export default () => {
  return (
    <NotesProvider>
      <Router>
        <Main path="/app" />
        <View path="/app/view/:id" />
        <Editor path="/app/edit/:id" />
        <Editor path="/app/edit/new" />
      </Router>
    </NotesProvider>
  )
}
