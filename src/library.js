import React, { Fragment, useState, useEffect } from 'react';   
import './library.css';
import './covid.css';
import axios from 'axios'


export default function Book() {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('foods');
    const [url, setUrl] = useState(
      'https://hn.algolia.com/api/v1/search?query=foods',
    );
   
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(url);
   
        setData(result.data);
        console.log(result.data);


        

      };
   
      fetchData();
    }, [url]);
   
    return (
       <form id="form1"><br/><br/><br/>
    <div id="main"><br/><br/>
 <div id="selectcontainer"><br/>
              
 <input
          id="myinput"
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        /><br/><br/>
        <button 
          type="button"
          id="button"
          onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Search
        </button><br/><br/>
        <div id="display"><strong>The Result Are  :</strong></div><br/>
        {/* <div style="color: red;"><strong>Example:</strong></div><br/> */}
 </div>
          <div id="container">
        <ul id="responce">            
          {data.hits.map(item => (
            <li key={item.objectID}>
             {/* title : <div>{item.title} </div> 
             url : <a href={item.url}> </a> */}
                  <a href={item.url}>{item.title}</a>
                  <br/>
                  <strong>Author: {item.author}</strong><br/>
                <br/>   
            </li>
          ))}
        </ul>
        </div>
        </div><br/><br/><br/>
      </form>
     
        );
  } 

  