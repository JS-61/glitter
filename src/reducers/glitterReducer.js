import {
    ADD_FOLLOWER,
    ADD_FOLLOWING,
    CHANGE_AVATAR,
    CHANGE_NAME,
    DELETE_FOLLOWER,
    DELETE_FOLLOWING
} from "../actions/userAction.js";

// typeof State = {
//     user: {
//         name: string,
//         avatar: string
//     },
//     stats: {
//         followers: number,
//         following: number
//     }
// }




export const glitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}}
        case CHANGE_NAME:
            return {...state,user: {...state.user, name: action.payload || state.user.name}}
        case ADD_FOLLOWER:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    followers: Math.max(0, state.stats.followers + (action.payload || 0))
                }
            }
        case DELETE_FOLLOWER:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    followers: Math.max(0, state.stats.followers - (typeof action.payload === 'number' ? action.payload : 0))
                }
            }
        case ADD_FOLLOWING:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    following: Math.max(0, state.stats.following + (action.payload || 0))
                }
            }
        case DELETE_FOLLOWING:
            return {
                ...state,
                stats: {
                    ...state.stats,
                    following: Math.max(0, state.stats.following - (typeof action.payload === 'number' ? action.payload : 0))
                }
            }
        default:
            return state;
    }

}