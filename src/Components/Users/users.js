import { useEffect, useState } from "react";
import User from "./user";
import "./users.css"
import { Link } from "react-router-dom";
export default function Users(){
    // const[users,setUsers] = useState([
    //     {id:1, name:"Aram Sargsyan",description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",avatar:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"},
    //     {id:2, name:"Tatev Sargsyan",description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",avatar:"https://img.freepik.com/free-psd/3d-illustration-of-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.7442328.1673426976&semt=ais"},
    //     {id:3, name:"Artur Sargsyan",description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",avatar:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"},
    //     {id:4, name:"Aram Sargsyan",description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",avatar:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"},
    //     {id:5, name:"Aram Sargsyan",description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",avatar:"https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436200.jpg?size=626&ext=jpg&ga=GA1.1.7442328.1673426976&semt=ais"},
    // ])
    const[users,setUsers] = useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(json => json.json())
         .then(data => setUsers(data))
        
    } ,[])
    return(
        <div>
           <div className="row">
            {users.map((user) =>(
                 <Link to={"/users/"+user.id}>
                  <User user={user} key={user.id}/>
                 </Link>
            ))}
           </div>
        </div>
    )
}



