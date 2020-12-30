import React , { useState, useEffect, Fragment }from 'react';
import './covid.css';
import { Select, MenuItem } from "@material-ui/core";
import axios from 'axios'



export default function Covid() {

  let myres=null;
  let country="India"
  const [data, setData] = useState({ confirmed:[] });
  const [query, setQuery] = useState(country);
  const [url, setUrl] = useState(
    'https://covid19.mathdro.id/api/countries/india',
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
 
      setData(result.data);
      // setQuery('');
      myres= result.data;
      console.log( {query});
      console.log(myres.confirmed)

      // console.log(res);
      // console.log(res.confirmed.value); 
      // console.log(res.confirmed.value);
      // console.log(res.deaths.value);
      return(
        
        document.getElementById("confirmed-display").innerText =   myres.confirmed.value,
        document.getElementById("recovered-display").innerText =   myres.recovered.value,
        document.getElementById("deaths-display").innerText =      myres.deaths.value + "   " 
     
      );
    };
 
    fetchData();
   
  }, [url]);

  return (
    <Fragment id="form1">
 
 <br/>
     <Select
       type="text"
       value={query}
       id="select1"
       onChange={event => setQuery(event.target.value)}
       >
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
          <MenuItem value={"Russia"}>RUSSIA</MenuItem>
       </Select> <br/><br/>
       

       <button 
       type="button"
       id="btn"
       onClick={() =>
         setUrl(`https://covid19.mathdro.id/api/countries/${query}`)
       }
     >
       Search
     </button>
<br/><br/>
<div id="result"> Country Selected : {query} </div><br/>
<div id="result"> The Cases are :</div><br/>
<div id="tablecover">
    <tr>
      <th id="Confirmed-th">Confirmed</th><br/>
      <th id="Recovered-th">Recovered</th><br/>
      <th id="Deaths-th">Deaths</th><br/>
    </tr>
    <tr id="tr-cases">
      <td id="confirmed-display" ></td>
      <td id="recovered-display" ></td>
      <td id="deaths-display"    ></td><br/>
    </tr>
</div>
{/* <ul>
         {posts.map(post=>(
            <li key ={post.id}>{post.title}</li>)
        )}
     </ul> */}
   </Fragment>
  
     );
}