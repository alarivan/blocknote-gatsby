import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "./styled/global"
import Header from "./header"
import { ThemeProvider } from "emotion-theming"
// @ts-ignore
import theme from "@rebass/preset"
import { Global } from "@emotion/core"

type Props = {
  children: ReactNode
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledContainer>
          <main>{children}</main>
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout
