import React from 'react';

export default function POIitem({ POI, image }) {
  return (
    <tr className="align-middle">
      <td>
        <img className="img-thumbnail max-100" src={image} alt="POI" />
      </td>
      <td className="max-50">{POI.FirstName}</td>
      <td className="max-50">{POI.LastName}</td>
      <td className="max-50">{POI.DOB}</td>
      <td className="max-50">{POI.Occupation}</td>
      <td className="max-50">{POI.Religon}</td>
    </tr>
  );
}
