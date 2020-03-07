import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button, { ButtonProps } from "@material-ui/core/Button"
import Zoom from "@material-ui/core/Zoom"
import DoneIcon from "@material-ui/icons/Done"

const useStyles = makeStyles({
  icon: {
    position: "absolute",
  },
})

const CopyButton: React.FC<ButtonProps> = ({ onClick, ...props }) => {
  const [copied, setCopied] = useState(true)
  const classes = useStyles()

  useEffect(() => {
    if (!copied) {
      const timer = setTimeout(() => {
        setCopied(true)
      }, 700)

      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCopied(!copied)
    if (onClick) onClick(event)
  }

  return (
    <Button onClick={handleClick} {...props}>
      <Zoom in={copied} appear={false}>
        <span>Copy</span>
      </Zoom>
      <Zoom in={!copied}>
        <DoneIcon className={classes.icon} />
      </Zoom>
    </Button>
  )
}

export default CopyButton
