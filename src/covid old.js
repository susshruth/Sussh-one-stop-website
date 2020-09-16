import React from 'react';
import './covid.css';
import { useForm, Controller } from "react-hook-form";
import { Select, MenuItem } from "@material-ui/core";

export default function Covid() {

  const view = (data) => {
    // console.log("In ");
    // console.log(data);
    // console.log(" the covid case now are")
    console.log("In " +(data)+" the covid case now are 100")
  }


  const display = (data) => {
    // if (data === india){
    //   data === India
    // }else{
    //   if(data === canada){
    //     data === Canada
    //   }else{
    //     data === usa
    //   }
    // }
    // var a = <h2>in {data} the covid case now are</h2>
  return document.getElementById("labe").innerHTML = "In " + (data) +" the covid case now are    ";
        // document.getElementById("labe2").innerHTML = (data);
        
        
  }


    const { control, register, handleSubmit } = useForm();
    // const country = document.getElementById("sele").value;
    const cont1="India";
    const cont2="Canada";
    const cont3="USA";
  return (
    <div>
      <form onSubmit={handleSubmit(view)}>
        <section  name="select-space">  
          <label id="lab">Country :</label>
          <Controller
            as={
              <Select name="country" id="sele" ref={register({ required: true})}>
                <MenuItem name="india" value="ind">{cont1}</MenuItem>
                <MenuItem name="canada" value="can">{cont2}</MenuItem>
                <MenuItem name="usa" value="usa">{cont3}</MenuItem>
              </Select>
            }
            name="Select"
            control={control}
          />
        </section>

        <label id="labe"></label>
        <label id="labe2"></label>

        <button type="submit">submit</button>
        <button onClick={display}>view</button>


      </form>


    </div>
  );
}