import React , { Fragment }from 'react';
import './covid.css';
import countrylist from './worldcountries';
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { Controller } from "react-hook-form";
// import axios from 'axios'

// const Countries = ({ match }) => {
//     const name = match.params.name;
//     const c = countrylist.find(c => c.name === name);
//     console.log(c)

const Countries = () => {
    //     const name = match.params.name;
         const c = countrylist.find(c => c.name === "India");
         console.log(c)
         console.log(c.name)

    // const [url, setUrl] = useState(
    //     'https://covid19.mathdro.id/api/countries/india',
    //   );
    // const [mycountry, setMycountry] = useState({ cases: null });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(`/api/countries/${name}`);
    //         const body = await result.json();
    //         // const apicases = await axios(url);
       
    //         // const res= apicases.data;
    //         setMycountry(result.data); 
    //     }

    //     fetchData();
    // }, [name]);

    // if (!article) return <NotFoundPage />

    // const otherArticles = articleContent.filter(article => article.name !== name);

    return (
      <Fragment>
        
        <h1>{c.name} {c.code}</h1>


        {/* <h1>{article.title}</h1> */}
        {/* <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} /> */}
        {/* {c.codes.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))} */}
               {/*<button 
       type="button"
       id="btn"
       onClick={() =>
         setUrl(`https://covid19.mathdro.id/api/countries/${name}`)
       }
     >
       Search
     </button> */}




    

{/* <Fragment id="form1">
  <> */}
 
{/* <br/>
<Controller
      as={
        <Autocomplete
          options={countries}
          getOptionLabel={option => option.label}
          renderOption={option => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          renderInput={params => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
        />
      }
      onChange={([, data]) => data}
      name="country"
      control={control}
      defaultValue={{ code: 	"AF", label: "Afghanistan", phone: "93" }}
    /> */} 




{/* <Select
      type="text"
      //value={c}
      id="select1"
      options={countrylist.Countries}
      getOptionLabel={option => option.name}
      renderOption={option => (
        <span>
          {countryToFlag(option.code)}
          {option.name}
        </span>
        )}
      onChange={([, data]) => data}
      // onChange={event => setQuery(event.target.value)}
     // onChange={Countries}
      >
         <MenuItem value={"India"}>India</MenuItem>
         <MenuItem value={"Canada"}>Canada</MenuItem>
         <MenuItem value={"USA"}>USA</MenuItem>
      </Select> <br/><br/> */}
    
      <div id="result"> Country Selected : {c} , click search to view cases</div><br/>
      

      <button 
      type="button"
      id="btn"
    //   onClick={() =>
    //     setUrl(`https://covid19.mathdro.id/api/countries/${name}`)
    //   }
    >
      Search
    </button>
    <div id="provincecovid">
    <select>
    <option></option>
    </select>
    </div>


    <br/><br/>

    </Fragment>
 
    );
}

export default Countries;