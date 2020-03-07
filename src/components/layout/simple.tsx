import React, { ReactNode } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
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

const SimpleLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.container}>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default SimpleLayout
