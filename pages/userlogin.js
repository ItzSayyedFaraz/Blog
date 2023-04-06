import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import swal from "sweetalert";
import { useRouter } from 'next/router.js';
import {collection,db,  query, where, getDocs } from "firebase/firestore";
import { usersdb } from '@blog/components/firebase/firebase.js';
import bcrypt from "bcryptjs";
import {Appstate} from "./index.js"
import { TailSpin } from "react-loader-spinner";
import { error } from 'jquery';

const userlogin = () => {
 
  // const useAppstate = useContext(Appstate);
  const router=useRouter();
  const [log,setLog]=useState(true);
  const login=(e)=>{
    e.preventDefault()
    if (log){
      
      router.push("/createpost")
    }else{
      setLog(true)
    }
  }
  
  // const [name,setName]=useState("")
  const [form, setForm] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  // const [loading,setLoading]=useState(false);
  // const login=async(e)=>{
  //   e.preventDefault
    
  //   try {
  //     // const userit=collection(db,"userlogins");
  //     const quer = query(usersdb, where("email", "==", form.email));
  //     const querySnapshot = await getDocs(quer);
  //     querySnapshot.forEach((doc) => {
  //       const _data = doc.data();
  //       // const isUser = bcrypt.compareSync(form.password, _data.password);
  //       if (isUser) {
         
  //         console.log("true")
  //         setLog(true);
  //         setName(_data.name);
  //         router.push("/")
          

  //         swal({
  //           title: "Logged In",
  //           icon: "success",
  //           buttons: false,
  //           timer: 3000,
  //         });
        
  //       }else{
         
          
  //         swal({
  //           title:"Invalid credentials",
  //           icon:"error",
  //           buttons:false,
  //           timer:3000

  //         })
  //       }
  //     });
      
  //   } catch (error) {
    
  //     swal({
  //       text: error.message,
  //       icon: "error",
  //       buttons: false,
  //       timer: 3000,
  //     });
  //   }
    
  // }

  
  
  return (
    <>
    <div className="userlogin">
         <h2>User Login</h2>
     <Form style={{marginTop:"30px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" placeholder="Enter your email id.." />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={login} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div>
      <p>New User?<Link href="/SignUp">Sign up</Link></p>
    </div>
    
    </div>
    <hr/>
    </>

  )
}

export default userlogin;
