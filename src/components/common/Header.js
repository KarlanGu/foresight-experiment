import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabMenu() {
  const classes = useStyles();

  //console.log(window.location.pathname);
  
  const highlightTabIndex=
    window.location.pathname === "/"?0
      :window.location.pathname === "/map"?1
      :0;
  //console.log(highLightTabIndex)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
          value={highlightTabIndex}
          aria-label="menu tabs"
        >
          <Tab label="Home" href="/" />
          <Tab label="Map" href="/map" />
        </Tabs>
      </AppBar>
    </div>
  );
};
// const Header = () => {
//   
//   return (
//     <nav>
//       <NavLink to="/" activeStyle={activeStyle} exact>
//         Home
//       </NavLink>
//       {" | "}
//       <NavLink to="/map" activeStyle={activeStyle} exact>
//         Map
//       </NavLink>
//     </nav>
//   );
// };
