import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/postpage.module.css";
import { doc, getDoc, getDocs, allpost, collection } from "firebase/firestore";
import { db } from "@blog/components/firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
const postpage = (props) => {


  const { query } = useRouter();
 
  const [addc,setAddc]=useState("")
  const[login,setLogin]=useState(false)
  const router=useRouter()
  const add=()=>{
    if(!login){
      router.push('/userlogin')
      setLogin(true)

    }else{
       setLogin(true)
       router.push(`/${query.postpage}`)
    }
  }
  const edits=()=>{
    if(!login){
      router.push('/userlogin')
    }
      else{
        setLogin(true)
        props.res.filter((p) => p.id == query.postpage).pop()
        router.push("/")
      }
  }
  console.log(query.postpage);
  return (
    <>
      <Head>
        <title>Blogify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
        />
      </Head>

      {props.res
        .filter((p) => p.id == query.postpage)
        .map((user, id) => {
          return (
            <main className={styles.post}>
              <section>
                <div className={styles.bannerimg}>
                  <Image
                    src={user.imgurl}
                    alt="No"
                    width={1000}
                    height={1200}
                  ></Image>
                </div>
                <h1>{user.title}</h1>
                <div className={styles.aboutauthor}>
                  <h5>{user.author}</h5>
                  <p>{user.date}</p>
                  <p><b>{user.category}</b></p>
                </div>
              </section>
              <hr />

              <article className={styles.article}>
                <p>{user.description}</p>
              </article>
              <div className={styles.icon}>
                <div  className={styles.ico}>
                <FontAwesomeIcon onClick={edits} icon={faEdit} />
                </div>
                <div className={styles.ico}>
                <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
              <div className={styles.comments}>
                <h3>Your Comments Here...</h3>
                <textarea onChange={(e)=>setAddc(e.target.value)} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={add}>Add Comment</button>
                <h6>user<span>     </span>time :</h6>
                <p>{user.reviews}</p>
              </div>
            </main>
          );
        })}
      <hr />
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await getDocs(collection(db, "blogpost"));
  let res = [];
  data.forEach((doc) => {
    res.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: {
      res,
    },
  };
};

export default postpage;