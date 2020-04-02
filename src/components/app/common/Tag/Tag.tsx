import React from "react"
import { TTag } from "../../../../reducers/tags/types"
import { Button, ButtonProps } from "@material-ui/core"

interface Props extends ButtonProps {
  tag: TTag
}

const Tag: React.FC<Props> = ({ tag: { id, color }, ...props }) => (
  <Button size="small" style={{ background: color }} {...props}>
    {id}
  </Button>
)

export default Tag
