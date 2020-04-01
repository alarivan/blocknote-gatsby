import React from "react"
import { Router, Link } from "@reach/router"
import { NotesProvider } from "../../context/NotesContext"
import Main from "../../components/app/routes/main"
import Editor from "../../components/app/routes/editor"
import View from "./routes/view"

export default () => {
  return (
    <NotesProvider>
      <Link to="/app">List</Link>
      <Link to="/app/edit/new">New</Link>

      <Router>
        <Main path="/app" />
        <View path="/app/view/:id" />
        <Editor path="/app/edit/:id" />
        <Editor path="/app/edit/new" />
      </Router>
    </NotesProvider>
  )
}
