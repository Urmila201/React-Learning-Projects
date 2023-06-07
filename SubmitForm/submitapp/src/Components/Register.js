import React from 'react'
import Styled from "styled-components"
export default function Register(props) {
  
    let btnText,passBoxType;
    let btnClasses = ["btn","m-1"];
    if(props.showPass === true ){
      btnText="Hide Password"
      passBoxType="text"
      btnClasses.push("btn-danger")
    }else{
      btnText="show Password"
      passBoxType="Password"
      btnClasses.push("btn-success")
    }
    const StyledButton = Styled.button`
    display:${(props)=>(props.flag? "inline-block":"block" )};
    padding:10px 5px; 
    background-color:${(props)=>props.color};
    border:none;
    color:white;
    width:${(props)=>(props.flag === "1" ?"45%":"100%")};
    margin:5px;`;
    const StyleRegisteredContainer = Styled.div`
    width:600px;
    &:hover{
      box-shadow:0px 0px 5px grey;
    }
    @media (min-width:0px) and (max-width:600px){
      width:300px;
    }
    `;
   
    // const StyledDiv = Styled.div`
    // background:yellowgreen;
    // height:100px;
    // width:100%;
    // text-align:center;
    // font-weight:bolder;
    // text-transform:uppercase;
    // color:blue;
    // padding-top:30px;
    // `;
  return (
    <StyleRegisteredContainer className='container card p-3 mt-2 '>
        <h1 className='text-center'>Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" required className='form-control'></input>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" required className='form-control'></input>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input 
            type={passBoxType} 
            name="password"
            required className='form-control'></input>
        </div>
        <button type='submit' className='btn btn-primary m-1' >Register</button>
        <button type="button" className={btnClasses.join(" ")}onClick={props.click} >{btnText}</button>
        <br/>
        <StyledButton type='button'color="orange" flag="1"  >Login</StyledButton>
        <StyledButton type='button' color='green' flag="1">Login With Google</StyledButton>
        <StyledButton flag="0" color='blue'>Login With Facebook</StyledButton>
        {/* <StyledDiv>Chatrapati</StyledDiv> */}
      </form>
    </StyleRegisteredContainer>
  )
}
