import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addFollower, addFollowing, deleteFollower, deleteFollowing} from "../actions/userAction.js";


const Stats = () => {
   const {followers, following} = useSelector(state => state.stats);
   const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div onClick={() => dispatch(addFollower(1))
                }
                     onContextMenu={(e) => {
                         e.preventDefault();
                         dispatch(deleteFollower(1));
                     }}>Followers: {followers}</div>
                <div onClick={() => dispatch(addFollowing(1))
                }
                     onContextMenu={(e) => {
                         e.preventDefault();
                         dispatch(deleteFollowing(1));
                     }}>Following: {following}</div>
            </div>
        </div>
    )
}
export default Stats;