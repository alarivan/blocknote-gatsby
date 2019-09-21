import React, { ReactNode } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "./styled/global"
import Header from "./header"

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
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledContainer>
    </>
  )
}

export default Layout
