import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Collapse from '@material-ui/core/Collapse';
import { IconButton } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



// import useSWR from 'swr';
// //import POIitem from './POIitem.js';
// import { fetcher } from '../helpers/SwrHelper';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPOIs } from '../../redux/actions/POIActions';

const {REACT_APP_BACKEND_URL} = process.env;

const useStyles= makeStyles({
    card:{
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column'
    },
    content:{ 
        width: "100%", 
        overflow: "auto", 
        paddingBottom: "0px", 
        position: "relative"

    },
    name:{
        display: 'flex', 
        flexDirection: 'column',
        float:"left"
    },
    detail:{
        position: "absolute", 
        bottom: "8px",
        left: "8px"
    },
    profilePic:{
        borderRadius: "50px", 
        paddingTop: "50%",
        backgroundSize: "cover",
        width:"50%",
        display: 'flex', 
        float:"right"
    },
    collapseIcon:{
        left: "50%", 
        marginLeft: "-18px", 
        position: "absolute", 
        bottom: "0px"
    }
});

function PoiCard(poi){
    const [collapsed, setCollapsed] = useState(false);

    const classes=useStyles();

    let expandIcon;
    if(!collapsed){
        expandIcon = <ExpandMore fontSize="inherit"/>
    }
    else{ expandIcon =<ExpandLess fontSize="inherit"/>} 

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography className={classes.name} variant="h6">
                    {poi.firstname + " " + poi.lastname}
                </Typography>
            
                <IconButton
                    className={classes.collapseIcon}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="more details"
                    size="small"
                    >
                    {expandIcon}
                </IconButton>
                <Collapse in={collapsed} timeout="auto" unmountOnExit>
                    <CardContent className={classes.detail}>
                        <Typography >
                        DOB: {poi.DOB} 
                        <br/> 
                        Occupation: {poi.occupation}
                        <br/>
                        Religion: {poi.religion}
                        </Typography>
                    </CardContent>
                </Collapse>
                <CardMedia
                    className={classes.profilePic}
                    image={poi.picture}
                    title="POI profile picture"
                />
            </CardContent>
        </Card>
    )
};

function renderPoiCard(poiData){
    let pictureUrl = REACT_APP_BACKEND_URL+"/pois/image/" + poiData.ID + "/pois/" + poiData.ID
    let date=poiData.DOB.slice(0,10)
    return(
        <PoiCard
            firstname = {poiData.FirstName?poiData.FirstName:"Unknown"} 
            lastname = {poiData.LastName?poiData.LastName:"Unknown"}
            DOB = {poiData.DOB?date:"Unknown"}
            occupation = {poiData.Occupation?poiData.Occupation:"Unknown"}
            religion = {poiData.Religion?poiData.Religion:"Unknown"}
            picture = {pictureUrl}
        />
    )
};

export function CardView(){
    const padding = "40px";
    
    // const { data } = useSWR(
    //     REACT_APP_BACKEND_URL+'/pois',
    //     fetcher
    // );

    //fetch state from store, since store is avaliable through provider in index.js
    const poiList = useSelector((state) => state.POIList);
    const {loading, error, POIs} = poiList;
    const dispatch = useDispatch();

    //call action to update state from API
    useEffect(() => {
        dispatch(fetchPOIs);
    }, [dispatch]);

    if(loading){
        return (
            <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
                <Typography>Loading...</Typography>
            </div>
            )
    }

    if(error){
        return(
            <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
                <Typography>Error retrieving POI data.</Typography>
            </div>
            );
    }

    if(POIs.length === 0){
        return (
            <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
                <Typography>No POI data found.</Typography>
            </div>
        )
    }
     
    return <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
        <Grid container spacing={4}>
            <Grid container spacing={4}>

                {POIs.map((poiData) => (
                    <Grid item key={poiData.ID} xs={12} sm={6} md={4}>
                        {renderPoiCard(poiData)}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </div>
};