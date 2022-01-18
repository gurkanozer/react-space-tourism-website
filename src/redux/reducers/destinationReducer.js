import {GET_DESTINATION} from '../actionTypes';
import initialStates from '../initialStates';

const destinationReducer = (state=initialStates.destination,action)=>{
    switch (action.type) {
        case GET_DESTINATION:
            return action.payload;
    
        default:
            return state;
    }
}