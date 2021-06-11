import React from 'react';
import useSWR from 'swr';
import POIitem from './POIitem.js';
import { fetcher } from './SwrHelper';

export function POIlist() {
  const { data } = useSWR(
    'http://foresight.australiaeast.cloudapp.azure.com:3000/pois',
    fetcher
  );

  const { image } = useSWR(
    'http://foresight.australiaeast.cloudapp.azure.com:3000/pois/image/51/pois/51',
   fetcher
  );

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
            {data.map((POI) => (
              <POIitem  POI = {POI} image = {image} key={POI.ID} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
