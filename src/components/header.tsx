import { Link } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

type Props = {
  siteTitle: string
}

const useStyles = makeStyles({
  header: {
    background: "rebeccapurple",
    marginBottom: "1.45.rem",
  },
  inner: {
    margin: "0 auto",
    maxWidth: "960px",
    padding: "1.45rem 1.0875rem",
  },
  h1: {
    margin: "0 auto",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
})

const Header: React.FC<Props> = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <h1 className={classes.h1}>
          <Link className={classes.link} to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
