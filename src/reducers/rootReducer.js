import {
    ADD_FOLLOWER,
    ADD_FOLLOWING,
    CHANGE_AVATAR,
    CHANGE_NAME,
    DELETE_FOLLOWER,
    DELETE_FOLLOWING
} from "../actions/userAction.js";
import {userReduser} from "./userReducer.js";
import stats from "../components/Stats.jsx";
import {statsReducer} from "./statsReducer.js";

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




export const rootReducer = (state, action) => {
    return {
        user: userReduser(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}