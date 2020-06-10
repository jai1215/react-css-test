import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Memory from "@material-ui/icons/Memory";

const useStyles = makeStyles((theme: { zIndex: { drawer: number } }) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      {/* <Toolbar style={{ background: "#2E3B55" }}> */}
      <Toolbar>
        <Memory fontSize="large" />
        <Typography variant="h6" noWrap>
          &nbsp;DNE Model Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
