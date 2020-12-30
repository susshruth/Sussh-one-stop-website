import React,{ useState } from 'react';
import './css/index.css';
import * as ReactBootStrap from "react-bootstrap";

export default function Calculate(){
    const { register, handleSubmit, errors } = useForm();

    const [num1, setNum1] = useState(0);  
    const [num2, setNum2] = useState(0);

    const handleChange1 = e => {
        setNum1(e.target.value);
    } ;
    const handleChange2 = e => {
        setNum2(e.target.value);
    } ;
    const onSubmit = () => {
        console.log("Num1 : " + num1 + " Num2 : " + num2)
      }

    return(
        <div>
            <input type="number" name="num1" placeholder="Num1" value={num1} ref={register({ required : true })}></input>
            {errors.num1 && <p>This are a required field</p>}
            <input type="number" name="num2" placeholder="Num2" value={num2} ref={register({ required : true })}></input>
            {errors.num2 && <p>This are a required field</p>}
            <button id="submitform" type="submit">submit</button><br/><br/>
        </div>
    )
}