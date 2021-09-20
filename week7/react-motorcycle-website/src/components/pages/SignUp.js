import React from 'react';
import '../../App.css';



export default function SignUp() {
    return  <>
    <h1 className = 'sign-up'>Contact</h1>
    <h5>Join us for deals and updates</h5>
    <form>
      <input type="text" placeholder="First Name"></input>
      <br></br>
      <input type="text" placeholder="Last Name"></input>
      <br></br>
      <input type="email" placeholder="Email"></input>
      <br></br>
      <input type="tel" placeholder="Phone"></input>
      <br></br>
      <button type= "submit">Submit</button>
    </form>

    </>
}

