import React,{useState,useContext} from "react";
import { FirebaseApp } from "firebase/app";
import 'firebase/auth';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import {getAuth, RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'
import app from "@blog/components/firebase/firebase";
// import { Appstate } from "./index.js";
import bcrypt from 'bcryptjs'
import { addDoc } from 'firebase/firestore'
import { admins } from "@blog/components/firebase/firebase";

const auth=getAuth(app)
// const Appstate=useContext(Appstate)
const adminlogin = () => {
  const router=useRouter()
  const [id,setId]=useState("")
  const[otp,setOtpSent]=useState(false)
  const[OTP,setOTP]=useState("")
  const [form,setForm]=useState([{
    mobile:"",
    id:"",
    // password:''
  }])
  const generateRecaptcha=()=>{
    window.recaptchaVerifier=new RecaptchaVerifier('recaptcha-container',{
      "size":"hidden",
      "callback":(response)=>{

      }
    },auth)
 
}

const requestOTP=(e)=>{
  e.preventDefault()
 
  // setLoading(true);
  
  generateRecaptcha();


  let appVerifier=window.recaptchaVerifier;
  signInWithPhoneNumber(auth,`+91${form.mobile}`,appVerifier)
  .then(confirmationResult=>{
    window.confirmationResult=confirmationResult;
    swal({
      text:"OTP Sent",
      icon:"success",
      buttons:false,
      timer:3000,
    })
      setOtpSent(true);
      setLoading(false);
  }).catch((error)=>{
    console.log(error)
  })
 
  // router.push("/verifyotp")
  setOtpSent(true)
}


const verifyOTP=(e)=>{
  e.preventDefault

  try {
    setLoading(true);
    window.confirmationResult.confirm(OTP).then((result)=>{
      uploadData();


      swal({
        text:"Successfully Registered",
        icon:"success",
        buttons:false,
        timer:3000,
      });
        router.push("/login");
        setLoading(false);
    })
    
  } catch (error) {
    console.log(error);
    
  }

}

const uploadData=async()=>{
  try {
  const salt=bcrypt.genSaltSync(10);
  var hash=bcrypt.hashSync(form.password,salt)
 
    await addDoc(admins,{
      email:form.id,
      // password:hash,
      mobile:form.mobile
    
  });
}catch(error) {
    console.log(error)
    
  }
 

}


  return (
  <>
    {otp?
    
    <>
    <div className="verification">
      <input type="number" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
      <button onClick={verifyOTP}>Verify Otp</button>
    </div>
    
  <hr />
  </>:
  
  
      <div className="adminlogin">
        <h2>Admin Login</h2>
        <Form style={{ marginTop: "30px" }}>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>Admin Id</Form.Label>
            <Form.Control value={form.id} type="text" placeholder="Enter your id" onChange={((e)=>setForm({...form,id:e.target.value}))} />
            <Form.Label>Mobile No</Form.Label>
            <Form.Control value={form.mobile} type="number" placeholder="Enter your no" onChange={((e)=>setForm({...form,mobile:e.target.value}))} />
          </Form.Group>
          

          {/* <input type="number" value={form.mobile} onChange={((e)=>setForm({...form,mobile:e.target.value}))}/> */}
          {/* <input type="email" value={form.email} onChange={((e)=>setForm({...form,email:e.target.value}))}/>
          <input type="password" value={form.password} onChange={((e)=>setForm({...form,password:e.target.value}))}/> */}
          <Button onClick={requestOTP} variant="primary" type="submit">
            Request Otp
          </Button>
        </Form>
        <div id='recaptcha-container'>

</div>
        </div>
  
      
}
</>
  );
};

export default adminlogin;
