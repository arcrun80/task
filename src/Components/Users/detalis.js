import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export default function Detalis(){
    const{id} = useParams();
    const[posts,setPosts] = useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(data => setPosts(data.filter(x => x.userId == id)))
       
    },[id])
    return(
        <div>
            {posts.map((item) =>(
                <div>
                   <h3>{item.title}</h3> 
                   <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}
