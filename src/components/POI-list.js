import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import useSWR from 'swr';
import POIitem from './POIitem.js';
import { fetcher } from './helpers/SwrHelper';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  cover: {
    width: 151,
  },
  pos: {
    marginBottom: 12,
  },
});

export function POIlist() {
  const classes = useStyles()
  const { data } = useSWR(
    'http://foresight.australiaeast.cloudapp.azure.com:3000/pois',
    fetcher
  );

  // const image = 'http://foresight.australiaeast.cloudapp.azure.com:3000/pois/image/51/pois/51';
  // console.log("image:");
  console.log(data);

  if (!data) {
    return <div className="container mt-5">Loading ...</div>;
  }

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Occupation</th>
              <th scope="col">Religion</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((POI) => {
              let image = 'http://foresight.australiaeast.cloudapp.azure.com:3000/pois/image/' + POI.ID + '/pois/' + POI.ID;
              return <POIitem  POI = {POI} image = {image} key={POI.ID} />;}
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
