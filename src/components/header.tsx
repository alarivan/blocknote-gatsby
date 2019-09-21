import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type Props = {
  siteTitle: string
}

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const StyledHeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledHeaderH1 = styled.h1`
  margin: 0 auto;
`

const StyledHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderInner>
      <StyledHeaderH1>
        <StyledHeaderLink to="/">{siteTitle}</StyledHeaderLink>
      </StyledHeaderH1>
    </StyledHeaderInner>
  </StyledHeader>
)

export default Header
