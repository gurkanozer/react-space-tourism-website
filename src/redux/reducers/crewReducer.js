import {GET_CREW} from '../actionTypes';
import initialStates from '../initialStates';

const crewReducer = (state=initialStates.crew,action)=>{
    switch (action.type) {
        case GET_CREW:
            return action.payload;
    
        default:
            return state;
    }
}

export default crewReducer;