import { useEffect, useState } from "react"

export default function Users() {
    const [user, setUser] = useState([])
    
    useEffect(() => {
        fetch(fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>setUser(json)))
    },[])


    return (
        <div>
            <h3>User:{user.length}</h3>
        </div>
    )
}
/**
 * 1.declare a state to the hold data
 * 2.useEffect with callback and dependency array
 * 3.use fetch to load data
 */