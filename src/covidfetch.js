import React , { useState, useEffect, Fragment }from 'react';
import './covid.css';
import { Select, MenuItem } from "@material-ui/core";
import axios from 'axios'

export default function Covidfetch() {

    const [query, setQuery] = useState('redux');
    const [posts, setPosts] = useState({});
    // const [url, setUrl] = useState(
    //     'https://covid19.mathdro.id/api/countries/India',
    //   );

    useEffect(()=>{
        // axios.get(`https://covid19.mathdro.id/api/countries/${query}/confirmed`)
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
            console.log(res.data)
            // console.log(res.data.confirmed.value)
            // console.log(res.data.confirmed.detail)

            // console.log(res.data.recovered.value)
            // console.log(res.data.recovered.detail)
            
        })
        // .catch(err=>{
        //     console.log(err)
        // })
    },[])

    // render(){
    //   return(

    //   )
    //     <div>
    //     <ul>
    //          {
    //              posts.map(post=>{
    //                  return(
                 
    //                 <li key ={post.id}>{post.title}</li>)
                 
                    
    //      </ul>
    // </div>
    //              )
    // }

  return (
    <Fragment>
 
         
     <Select
       type="text"
       value={query}
       onChange={event => setQuery(event.target.value)}
       >
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
       </Select>
       

     <button 
       type="button"
       id="button"
    //    onClick={() =>
    //      setUrl(`https://covid19.mathdro.id/api/countries/${query}`)
    //    }
     >
       Search
     </button>
{/* 
     <div>{posts.value}</div>


     <div>{posts.data}</div>  */}
     
<div>
<ul>
         {
             posts.map(post=>(
                <li key ={post.id}>{post.title}</li>)
               
             )}
     </ul>
</div>

    

   </Fragment>
  
     );
    
      
    }





