import Head from "next/head";
import { createContext, useState } from "react";
import Navmenu from "@blog/components/Navbar";
// import Category from "@blog/components/Category";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { allpost } from "@blog/components/firebase/firebase";
import { getDocs } from "firebase/firestore";
// import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('./createpost'),
//   { ssr: false }
// )
const Appstate = createContext();

export default function Home(props) {
  // const [data,setData]=useState([])
  // const router = useRouter();
  // console.log(router);
  const [uslogin,setUslogin]=useState(true);
  const [name,setName]=useState("")
  const [adlogin,setAdlogin]=useState(false)

  return (
    <>
    <Appstate.Provider value={{uslogin,setUslogin,name, adlogin,setAdlogin,setName}}>
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

      {props.res.map((user, id) => {
        const imgi = user.imgurl;

        return (
          <>
            {/* <DynamicComponentWithNoSSR /> */}
            <div className={styles.parent}>
              <div key={id} className={styles.cardcontainer}>
                <div className={styles.cardwrapper}>
                  <div className={styles.vcard}>
                    <div className={styles.cardcontent}>
                      <h2 className={styles.h2ellips}>{user.title}</h2>

                      <p className={styles.pellips}>{user.description}</p>

                      <div className={styles.status}>
                        <p>{user.date}</p>
                        <Link href="/"><FontAwesomeIcon icon={faEdit} /></Link>
                        <Link href="/adminlogin"><FontAwesomeIcon icon={faTrash} /></Link>
                        <Link href={`/${user.id}`}>
                          <button className={styles.readbtn}>Read more</button>
                        </Link>
                      </div>
                    </div>
                    <Image
                      src={imgi}
                      alt="no image"
                      width={400}
                      height={40}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            
          </>
        );
      })}

      <div className={styles.pto}>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </Appstate.Provider>
    </>
  );
}
export {Appstate};
export const getServerSideProps = async () => {
  const data = await getDocs(allpost);
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