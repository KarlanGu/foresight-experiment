import {mutate} from "swr";
import UuidStore from "./UuidStore";

export function addPOI (id) {
  fetch(
    "http://foresight.australiaeast.cloudapp.azure.com:3000/pois",{
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
        "X-SESSION-TOKEN": UuidStore.value
      },
      body: JSON.stringify ({
        id:id
      })
    }).then(() => {
      mutate("http://foresight.australiaeast.cloudapp.azure.com:3000/pois")
    })
}