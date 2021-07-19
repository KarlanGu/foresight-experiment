import { POIS_REQUEST, 
    POIS_SUCCESS, 
    POIS_FAIL,
     POI_INCIDENTCONDITIONS_REQUEST, 
     POI_INCIDENTCONDITIONS_FAIL, 
     POI_INCIDENTCONDITIONS_SUCCESS, 
     POI_REQUEST, 
     POI_SUCCESS, 
     POI_FAIL, 
     POI_IMAGE_REQUEST, POI_IMAGE_SUCCESS, POI_IMAGE_FAIL, POI_ADDRESS_REQUEST, POI_ADDRESS_SUCCESS, POI_ADDRESS_FAIL, POI_WARNINGFLAGS_REQUEST, POI_WARNINGFLAGS_SUCCESS, POI_WARNINGFLAGS_FAIL, POI_PHONENUMBERS_REQUEST, POI_PHONENUMBERS_SUCCESS, POI_PHONENUMBERS_FAIL, POI_EMAIL_REQUEST, POI_EMAIL_SUCCESS, POI_EMAIL_FAIL, POI_VEHICLE_REQUEST, POI_VEHICLE_FAIL, POI_VEHICLE_SUCCESS, POI_LICENCE_REQUEST, POI_LICENCE_SUCCESS, POI_LICENCE_FAIL, POI_SOCIAL_MEDIA_REQUEST, POI_SOCIAL_MEDIA_SUCCESS, POI_SOCIAL_MEDIA_FAIL, POI_PHONENUMBER_ADD_REQUEST, POI_PHONENUMBER_ADD_SUCCESS, POI_PHONENUMBER_ADD_FAIL, POI_EMAIL_ADD_REQUEST, POI_EMAIL_ADD_SUCCESS, POI_EMAIL_ADD_FAIL, POI_VEHICLE_ADD_REQUEST, POI_VEHICLE_ADD_SUCCESS, POI_VEHICLE_ADD_FAIL, POI_LICENCE_ADD_REQUEST, POI_LICENCE_ADD_FAIL, POI_LICENCE_ADD_SUCCESS, POI_LICENCE_DELETE_REQUEST, POI_LICENCE_DELETE_FAIL, POI_LICENCE_DELETE_SUCCESS, POI_SOCIAL_MEDIA_ADD_REQUEST, POI_SOCIAL_MEDIA_ADD_SUCCESS, POI_SOCIAL_MEDIA_ADD_FAIL} 
     from "../constants/POIConstants"


export const POIsReducer = ( state = { POIs: [] }, action ) => {
    switch (action.type) {
        case POIS_REQUEST: 
            return { loading: true, POIs: [] }
        case POIS_SUCCESS:
            return { loading: false, POIs: action.payload }
        case POIS_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    } 
}
