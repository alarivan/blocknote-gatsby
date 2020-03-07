import React, { ReactNode } from "react"
import Button from "@material-ui/core/Button"

interface Props {
  children: ReactNode
}

const NavMenuItem: React.FC<Props> = ({ children }) => (
  <Button variant="contained" color="primary">
    {children}
  </Button>
)

export default NavMenuItem
