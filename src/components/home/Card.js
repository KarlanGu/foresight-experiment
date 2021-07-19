import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useSWR from 'swr';
//import POIitem from './POIitem.js';
import { fetcher } from '../helpers/SwrHelper';

const REACT_APP_BACKEND_URL="http://foresight.australiaeast.cloudapp.azure.com:3000";

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
        bottom: "8px"
    },
    profilePic:{
        borderRadius: "50px", 
        paddingTop: "50%",
        backgroundSize: "cover",
        width:"50%",
        display: 'flex', 
        float:"right"
    },
});

function PoiCard(poi){
    const classes=useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography className={classes.name} variant="h6">
                    {poi.firstname + " " + poi.lastname}
                </Typography>
                <Typography className={classes.detail}>
                    DOB: {poi.DOB} 
                    <br/> 
                    Occupation: {poi.occupation}
                    <br/>
                    Religion: {poi.religion}
                </Typography>
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

    return(
        <PoiCard
            firstname = {poiData.FirstName?poiData.FirstName:"Unknown"} 
            lastname = {poiData.LastName?poiData.LastName:"Unknown"}
            DOB = {poiData.DOB?poiData.DOB:"Unknown"}
            occupation = {poiData.Occupation?poiData.Occupation:"Unknown"}
            religion = {poiData.Religion?poiData.Religion:"Unknown"}
            picture = {pictureUrl}
        />
    )
};

export function CardView(){
    const padding = "40px";
    
    const { data } = useSWR(
        REACT_APP_BACKEND_URL+'/pois',
        fetcher
    );
    
    if(!data){
        return (
            <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
                <Typography>Loading...</Typography>
            </div>
            )
    }

    if(data.length === 0){
        return (
            <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
                <Typography>No POI data found.</Typography>
            </div>
        )
    }
     
    return <div style={{paddingTop: padding, paddingLeft: padding, paddingRight: padding}}>
        <Grid container spacing={4}>
            <Grid container spacing={4}>

                {data.map((poiData) => (
                    <Grid item key={poiData.ID} xs={12} sm={6} md={4}>
                        {renderPoiCard(poiData)}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </div>
};