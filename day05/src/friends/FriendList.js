import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({friends, onDel}) => {
    return (
        <ul>
            {
                friends.map(friend => <FriendItem key={friend.id} 
                    friend={friend} onDel={onDel} />)
            }
        </ul>
    );
};

export default FriendList;