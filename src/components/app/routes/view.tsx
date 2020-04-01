import React, { useContext, useMemo } from "react"
import { RouteComponentProps } from "@reach/router"
import { NotesContext } from "../../../context/NotesContext"
import { navigate } from "gatsby"
import Viewer from "../Viewer"

interface Props extends RouteComponentProps {
  id?: string
}

const View: React.FC<Props> = ({ id }) => {
  const { state} = useContext(NotesContext)
  if (!id) {
    navigate("/app")
    return null
  } else {
    const note = useMemo(() => state.get(id), [id, state])
    if (!note) {
      navigate("/app")
      return null
    }

    return (
      <div>
        <Viewer note={note}/>
      </div>
    )
  }
}

export default View
