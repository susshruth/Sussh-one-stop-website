import React , { useState, useEffect, Fragment }from 'react';
import './covid.css';
import { Select, MenuItem } from "@material-ui/core";
import axios from 'axios'
// import * as ReactBootStrap from "react-bootstrap";



export default function State() {

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
      myres= result.data;
      // console.log(res);
      // console.log(res.confirmed.value); 
      // console.log(res.confirmed.value);
      // console.log(res.deaths.value);
    if(query==="India"){

      var province = ["Tamilnadu", "Delhi", "Goa", "Nagaland"];

    }
    else if(query === "Canada"){

      var province = ["Ontario", "Nunavut", "Manitoba"]

    }
    else{

      var province = ["Washington"]

    }
    var provinceselection = "";
    var i;
    for(i = 0 ; i < province.length ; i++ ){

      provinceselection= provinceselection+"<option>"+province[i]+"</option>";


    }
    provinceselection="<select>"+provinceselection+"</select>"
    document.getElementById("provincecovid").innerHTML=provinceselection;
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
       </Select> <br/><br/>
       <div id="result"> Country Selected : {query} , click search to view cases</div><br/>
       

       <button 
       type="button"
       id="btn"
       onClick={() =>
         setUrl(`https://covid19.mathdro.id/api/countries/${query}`)
       }
     >
       Search
     </button>
     <div id="provincecovid">
     <select>
     <option></option>
     </select>
     </div>


     <br/><br/>
<div id="result"> The Cases :</div><br/>
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
    <div id="stateview">
    </div>
         <br/><br/>
     {/* <button 
       type="button"
       id="province"
       onClick={handleSubmit}
     >
       viewstate
     </button>
     <br/><br/> */}
    {/* <ul>
         {data.map(countrystate=>(
            <li>{countrystate.title}</li>)
        )}
     </ul> */}
</div>
   </Fragment>
  
     );
}