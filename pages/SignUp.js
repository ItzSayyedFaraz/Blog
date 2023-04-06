import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { TailSpin } from 'react-loader-spinner'

import {getAuth, RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'
// import app from './firebase/firebase'
import swal from 'sweetalert'
// import { useNavigate } from 'react-router-dom'
// import {bcrypt} from 'bcrypt'
import { usersdb } from '@blog/components/firebase/firebase.js';
import bcrypt from 'bcryptjs'
import { addDoc } from 'firebase/firestore'
import { useRouter } from 'next/router';

// const auth=getAuth(app)
const SignUp = () => {
  const router=useRouter();
  const[form,setForm]=useState([{
    name:"",
    email:"",
    password:""

}])
  // const[loading,setLoading]=useState(false)
  // const[otp,setOtpSent]=useState(false)
  // const[OTP,setOTP]=useState("")

//   const generateRecaptcha=()=>{
//     window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
//       "size":"visible",
//       "callback":(response)=>{

//       }
//     },auth)
// }

// const requestOTP=()=>{
//   setLoading(true);
//   generateRecaptcha();
//   let appVerifier=window.recaptchaVerifier;
//   signInWithPhoneNumber(auth,`+91${form.mobile}`,appVerifier)
//   .then(confirmationResult=>{
//     window.confirmationResult=confirmationResult;
//     swal({
//       text:"OTP Sent",
//       icon:"success",
//       buttons:false,
//       timer:3000,
//     })
//       setOtpSent(true);
//       setLoading(false);
//   }).catch((error)=>{
//     console.log(error)
//   })
// }
const uploadData=async(e)=>{
  e.preventDefault()
  try {
  const salt=bcrypt.genSaltSync(10);
  var hash=bcrypt.hashSync(form.password,salt)
 
   const done= await addDoc(usersdb,{
      name:form.name,
      password:hash,
      email:form.email
    
  } );
  // if(done){router.push("/")}
}catch(error) {
    console.log(error)
    window.alert(error)
    
  }
 
router.push("/")
}
  return (
    <>
    <div className="userlogin">
         <h2>User Sign Up</h2>
     <Form style={{marginTop:"30px"}}>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label >Name</Form.Label>
        <Form.Control value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mb-4" type="text" placeholder="Enter your name" />
        <Form.Label>Email Id</Form.Label>
        <Form.Control value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="text" placeholder="Enter your email id.." />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} type="number" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={uploadData} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 
    
    </div>
    <hr/>
    </>

  )
}

export default SignUp;
