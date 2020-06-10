import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MyTable from "./MyTable";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Contents() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <MyTable />
    </main>
  );
}
