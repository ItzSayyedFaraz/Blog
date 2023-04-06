import React from "react";
import styles from "../styles/header.module.css";
import Navmenu from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const redirect=(e)=>{
    if(e.target.value==undefined){
      console.log("yes")
    }
  }
  return (
    <>
    <header>
      <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          BlogiFy
          <span className={styles.small}>
            ...when knowledge embraces wisdom
          </span>
        </h1>
        <div className={styles.navmenu}>
          <Navmenu />
          <div className={styles.login}>
            <span className="badge badge-pill text-dark bg-light my-4">
              Login :
            </span>
            <Link href="/adminlogin" legacyBehavior>
              <a className="badge badge-danger bg-danger my-4 mx-3" value="Admin" onClick={redirect}>Admin</a>
            </Link>
            <Link href="/userlogin" legacyBehavior>
              <a className="badge badge-danger bg-danger my-4 mx-2">User</a>
            </Link>
            <Link href="/createpost" legacyBehavior>
              <div className={styles.post}>
            <Image src="/createpost.svg" alt="No image" width={25} height={25} ></Image>
            <h6>Create Post</h6>
            </div>
            </Link>
           


          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      </div>
      </header>
    </>
  );
};

export default Header;
