import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPOI } from '../../redux/actions/POIActions';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';

const {REACT_APP_BACKEND_URL} = process.env;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MapSideBar = ({children}) => {
    const classes = useStyles();
    //fetch state from store, since store is avaliable through provider in index.js
    const poiList = useSelector((state) => state.POIList);
    const {loading, error, POIs} = poiList;
    const dispatch = useDispatch();
    const [currPOISelected, setState] = useState(0);

    //call action to update state from API
    useEffect(() => {
        dispatch(fetchPOI(currPOISelected));
    },[dispatch]);

    return (
        <div className={classes.root}>
        <Box>
            <Toolbar />
            <div className={classes.drawerContainer}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List> */}
            </div>
        </Box>
        <main className={classes.content}>
            <div>{children}</div>
        </main>
        </div>
    );
}

export default MapSideBar;