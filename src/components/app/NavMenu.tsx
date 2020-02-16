import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PostAddIcon from "@material-ui/icons/PostAdd"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined"
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"
import KeyboardOutlinedIcon from "@material-ui/icons/KeyboardOutlined"
import NavMenuItem from "./NavMenu/Item"

const useStyles = makeStyles(theme => ({
  navmenu: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const NavMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.navmenu}>
      <NavMenuItem>
        <PostAddIcon />
      </NavMenuItem>
      <NavMenuItem>
        <ArchiveOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem>
        <ImportExportOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem>
        <SettingsOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem>
        <KeyboardOutlinedIcon />
      </NavMenuItem>
    </div>
  )
}

export default NavMenu
