import MyEditor from "./tinymce";
import { useRouter } from "next/router";
import { useState } from "react";

// const MyEditor = dynamic(() => import('./editor'), {
//   ssr: false,
// });

const createpost = () => {
  const [login,setLogin]=useState(false)
  const router=useRouter()
  const click=()=>{
    if(!login){
      router.push("/userlogin")

    }else{
      setLogin(true)
      router.push("/createpost")
    }
  }
  const del=()=>{
    if(login){
      router.push("/userlogin")

    }else{
      setLogin(true)
      router.push("/createpost")
    }
  }

  
  return (
    <>
      <div className="editor">
        <div className="editorinput">
        <input type="text" onChange={(e)=>e.target.value} placeholder="title"/>
        <input type="text" onChange={(e)=>e.target.value} placeholder="author"/>
        <input type="text" onChange={(e)=>e.target.value} placeholder="imgurl"/>
        <input type="text" onChange={(e)=>e.target.value} placeholder="date"/>
        <input type="text" onChange={(e)=>e.target.value} placeholder="category"/>
        </div>
        <div>
        <MyEditor onChange={(e)=>e.target.value} className="myeditor"/>
        </div>
        <div className="postbuttons">
        <button onClick={click} >Add Post</button>
        <button click={del}>Delete Post</button>
        </div>
      </div>
    </>
  );
};

export default createpost;
