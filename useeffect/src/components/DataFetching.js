import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [singlePost, setSinglePost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => {
           console.log(res)
           setPosts(res.data)
       })
       .catch(err => {
           console.log(err)
       }) 
    }, [])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setSinglePost(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
     }, [idFromButtonClick]) 
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <h1>{singlePost.title}</h1>
            <br/>
            <hr />
           <ul>
              {posts.map(post => (
                      <li key={post.id}>{post.title}</li>
                  ))} 
            </ul> 
        </div>
    )
}

export default DataFetching
