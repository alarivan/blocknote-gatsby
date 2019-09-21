import React from "react"
import { Router, Link } from "@reach/router"
import Layout from "../components/layout"
import Main from "../components/app/routes/main"
import Editor from "../components/app/routes/editor"
import { NotesProvider } from "../context/NotesContext"

const App = () => {
  return (
    <Layout>
      <NotesProvider>
        <Link to="/app">List</Link>
        <Link to="/app/edit/new">New</Link>

        <Router>
          <Main path="/app" />
          <Editor path="/app/edit/:id" />
          <Editor path="/app/edit/new" />
        </Router>
      </NotesProvider>
    </Layout>
  )
}

export default App
