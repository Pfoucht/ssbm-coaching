import { FETCH_PROFILE_SUCCESS, FETCH_GIGS_FAIL, FETCH_GIGS_LOADING, CHANGE_PROFILE_PIC_SUCCESS } from "../actions/actionTypes";
import { isNull } from "util";

const initialState = {
    profile: null,
    loading: false,
    error: null,
    profilePicture: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                username: action.username,
                gigs: action.gigs,
                profilePicture: action.profilePicture
            }
        case FETCH_GIGS_FAIL:
            return {
                ...state,
                loading: false
            }
        case FETCH_GIGS_LOADING:
            return {
                ...state,
                loading: true
            }
        case CHANGE_PROFILE_PIC_SUCCESS:
            return {
                ...state,
                profileImg: action.fileURL
            }
        default: return state;
    }
};

export default profileReducer;