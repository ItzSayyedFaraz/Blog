import React,{useState} from 'react'

const verifyotp = () => {
    const [OTP,setOtp]=useState("")
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
            email:form.email,
            password:hash,
            mobile:form.mobile
          
        });
      }catch(error) {
          console.log(error)
          
        }
       
      
      }
  return (
    <div>
          <div className="verification">
          <input type="number" value={OTP} onChange={(e)=>setOtp(e.target.value)} />
          <button onClick={verifyOTP}>Verify Otp</button>
        </div>
      
    </div>
  )
}

export default verifyotp
