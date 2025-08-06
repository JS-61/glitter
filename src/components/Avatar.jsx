import {useContext} from "react";
import {GlitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(GlitterContext)
    return (
        <img
            onClick={() =>  {
                const url = prompt('Enter your avatar URL');
                changeAvatar(url);
                }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}/>
    );
}

export default Avatar;