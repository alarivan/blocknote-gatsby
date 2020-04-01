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
      <NavMenuItem to="/app/edit/new">
        <PostAddIcon />
      </NavMenuItem>
      <NavMenuItem to="/app">
        <ArchiveOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem to="/app/import-export">
        <ImportExportOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem to="/app/settings">
        <SettingsOutlinedIcon />
      </NavMenuItem>
      <NavMenuItem to="/app/help">
        <KeyboardOutlinedIcon />
      </NavMenuItem>
    </div>
  )
}

export default NavMenu
