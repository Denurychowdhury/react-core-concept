
import { useEffect, useState } from 'react';
import Friend from './Friend';
import './friend.css';
export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      fetch(fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data  =>setFriends(data)))
   })
    return (
        <div className='box'>
            <h3>friends adding:{friends.length}</h3>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1.state to hold data
 * 2.use effect with dependency array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 */