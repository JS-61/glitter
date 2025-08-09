export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_FOLLOWER = 'ADD_FOLLOWER';
export const DELETE_FOLLOWER = 'DELETE_FOLLOWER';
export const ADD_FOLLOWING = 'ADD_FOLLOWING';
export const DELETE_FOLLOWING = 'DELETE_FOLLOWING';

export const changeAvatar = url => ({type: CHANGE_AVATAR,
     payload: url
});
export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
    });


export const addFollower = () => ({
    type: ADD_FOLLOWER,
    payload: 1
});

export const deleteFollower = () => ({
    type: DELETE_FOLLOWER,
    payload: 1
});


export const addFollowing = () => ({
    type: ADD_FOLLOWING,
    payload: 1
})

export const deleteFollowing = () => ({
    type: DELETE_FOLLOWING,
    payload: 1
})

