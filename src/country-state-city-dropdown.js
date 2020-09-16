import csc from 'country-state-city'
import {useForm} from "react-hook-form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './covid.css';
 
// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city';

import { CountryDropdown, RegionDropdown, CountryRegionData, selectCity  } from 'react-country-region-selector';


export default function Drop (){
    let val="";
    let val1=""
    let res=null;
    const [country, setCountry] = useState('');
  const [statename, setStatename] = useState('');
  const [city, setCity] = useState('');
  const { register, handleSubmit } = useForm();
  const [data,setData] = useState({confirmed:[]});
  const [cases, setCases] = useState({ countrycase: null, statecase: null });
  // const [mydata , setMyData] = useState({ countrycase: null, statecase: null });
  const [url, setUrl] = useState(`https://covid19.mathdro.id/api/countries/India`);

const selectCountry = (val) => {
  setCountry(val) 
 //  console.log(val);
 }
 
const selectStateName = (val1) => {
  setStatename(val1) ;
  // console.log(val1);
}

// const display = () => {
// return(
//   <ul>            
//         {data.confirmed.map(item => (
//           <li key={item.provinceState}>
//            {/* title : <div>{item.title} </div> 
//            url : <a href={item.url}> </a> */}
//                 <strong>confirmed: {item.confirmed}</strong><br/>
//               <br/>   
//           </li>
//         ))}
//       </ul>
// )
// }

  useEffect(() => {
    console.log ({country});
    console.log ({statename});
      const fetchData = async () => {
        // const resultforcountry = await axios(`https://covid19.mathdro.id/api/countries/${country}/`);
        const resultforcountry = await axios(
          `https://covid19.mathdro.id/api/countries/${country}/`
        );
        // https://covid19.mathdro.id/api/countries/${country}/confirmed?provinceState=${statename}
        const resultforstate = await axios(
          `https://covid19.mathdro.id/api/countries/${country}/confirmed?provinceState=${statename}`
        );
        // const resultforstate = await axios(`https://covid19.mathdro.id/api/countries/${country}/confirmed/${statename}`);

      setData(resultforcountry.data);
      // res= result.data;
      // console.log(res.data);
      console.log(resultforcountry.data.confirmed.value);
      console.log(resultforcountry.data.recovered);
      console.log(resultforcountry.data.deaths);
      console.log(resultforcountry.data.lastUpdate);

      console.log(resultforcountry.data)
      // , statecase: resultforstate.data
      setCases({ countrycase: resultforcountry.data, statecase:resultforstate.data });
      // setMyData({ countrycase: resultforcountry.data });
      const myres= resultforstate.data;
      console.log(myres)
      console.log(cases.statecase)
      // console.log(cases.statecase.data.confirmed.confirmed)
      console.log(cases.countrycase)
      console.log("---------------------------------")
      // console.log(cases.countrycase.confirmed.value)

      return(
        document.getElementById("confirmed-display").innerText =   resultforcountry.data.confirmed.value,
        document.getElementById("recovered-display").innerText =   resultforcountry.data.recovered.value,
        document.getElementById("deaths-display").innerText =      resultforcountry.data.deaths.value

        // document.getElementById("lastupdate").innerText =      "The lastUpdate for " + country + " was in :" + resultforcountry.data.lastUpdate
        // document.getElementById("state-display").innerHTML = display
      )      
    }; 

 
fetchData();
   
}, [country,statename]);

    return (
      <form id="covid"><br/><br/>
                <div id="main4"><br/><br/>
        <div id="selectcontainer">
        <strong id="result"> Country : </strong>
        <CountryDropdown
          value={country}
          id="countryselector"
        //   onChange={event => setQuery(event.target.value)}
          onChange={(val) => selectCountry(val)} /><br/><br/>
        {/* //   onChange={(event) => selectCountry(event.target.value)} /><br/><br/> */}

        <strong id="result"> State : </strong>
        <RegionDropdown
          country={country}
          value={statename}
          id="stateselector"
          onChange={(val1) => selectStateName(val1)} /><br/><br/>
        </div>



<br/><br/>
<div id="result"> The Covid Cases for <strong> {country}</strong> : </div><br/>
<div id="lastupdate"></div><br/>
{/* The lastUpdate for <strong> {country}</strong> was in :  */}
{/* <div id="result"> The Cases :</div><br/> */}
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
    </tr><br/>

      <div id="state-display">
      <div id="r1"> The Covid Cases for <strong> {statename}</strong> : </div><br/>
     </div>
    {/* <tr>
      <th id="Confirmed-th">Confirmed</th><br/>
      <th id="Recovered-th">Recovered</th><br/>
      <th id="Deaths-th">Deaths</th><br/>
    </tr>
    <tr id="tr-cases">
      <td id="confirmed-display" ></td>
      <td id="recovered-display" ></td>
      <td id="deaths-display"    ></td><br/>
    </tr> */}
  {/* <ul>            
        {data.confirmed.map(item => (
          <li key={item.provinceState}>
           {/* title : <div>{item.title} </div> 
           url : <a href={item.url}> </a>
                <strong>confirmed: {item.confirmed}</strong><br/>
              <br/>   
          </li>
        ))}
      </ul> */}
</div>
</div><br/><br/><br/><br/><br/>
      </form>
    );
    }