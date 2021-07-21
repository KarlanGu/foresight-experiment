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
  const navItems=[['Home','/'], ['Map','/map']]
  const highlightTabIndex= navItems.reduce((currIndex,[_,path],index) => 
    window.location.pathname===path?index
      :currIndex
  ,null)
  //console.log(highLightTabIndex)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
          value={highlightTabIndex}
          aria-label="menu tabs"
        >
          {navItems.map(([text, path]) => (
              <Tab key= {text} label={text} href={path} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};