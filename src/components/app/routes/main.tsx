import React, { useContext } from "react"
import { RouteComponentProps } from "@reach/router"
import { NotesContext } from "../../../context/NotesContext"

import Listing from "../Listing"

interface Props extends RouteComponentProps {}

const Main: React.FC<Props> = () => {
  const { state } = useContext(NotesContext)

  return <Listing notes={state.valueSeq()} />
}

export default Main
