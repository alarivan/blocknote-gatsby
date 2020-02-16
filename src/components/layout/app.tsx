import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import Header from "../header"
import theme from "../../theme/default"

type Props = {
  children: ReactNode
}

const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    maxWidth: "960px",
    padding: "0 1.0875rem 1.45rem",
  },
})

const AppLayout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={classes.container}>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default AppLayout
