import PoiCard from "./Card"

export function renderPoiCard(poiData){
    let date = poiData.DOB ? new Date(poiData.DOB).toLocaleDateString('en-AU') : "No DOB";
    let pictureUrl = "http://foresight.australiaeast.cloudapp.azure.com:3000/pois/image/" + poiData.ID + "/pois/" + poiData.ID
    return(
        <PoiCard
            firstname = {poiData.FistName} 
            lastname = {poiData.LastName}
            DOB = {date}
            occupation = {poiData.Occupation}
            religion = {poiData.religion}
            picture = {pictureUrl}
        />
    )
}