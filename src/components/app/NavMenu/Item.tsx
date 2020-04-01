import React, { ReactNode } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

interface Props {
  children: ReactNode
  to: string
}

const NavMenuItem: React.FC<Props> = ({ children, to }) => (
  <Link to={to}>
    <Button variant="contained" color="primary">
      {children}
    </Button>
  </Link>
)

export default NavMenuItem
