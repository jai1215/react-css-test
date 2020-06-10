import React from "react";
import Menu from "./Menu";
import MyAppBar from "./MyAppBar";
import Contents from "./Contents";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import { Toolbar } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <MyAppBar />
          <Menu />
          <Toolbar />
          <Contents />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
