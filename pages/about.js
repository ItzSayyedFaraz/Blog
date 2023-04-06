import React from 'react'

import Image from 'next/image'
import Aboutbg from "../public/Aboutbg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'





const about = () => {
  return (
    <>
    <div className="bgabout">
    <div >
      <h1>About us</h1>
    
      <Image src="/Aboutbg.jpg" alt="No image" width={200} height={200} ></Image>
    </div>
    <div className="info">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, provident perferendis commodi dolores amet corporis perspiciatis aut quidem asperiores odit obcaecati similique quae repellat quis non dolore delectus voluptatibus illum. Cumque est aperiam necessitatibus, aliquam et dignissimos aliquid autem vel modi ad reprehenderit velit amet labore quam officia dolorem quisquam tempora animi! Omnis blanditiis harum quo voluptates architecto optio praesentium accusantium delectus, impedit eum illum eius vero, adipisci cumque minus nulla, voluptatibus tenetur error iste expedita minima voluptate corrupti! Ipsa!
      </p>
      <h6><b>contact no :</b> <FontAwesomeIcon icon={faPhone}/>+91 7788994455</h6>
      <ul>
      <li>
      <Image src="/facebook.svg" alt="No image" width={25} height={25} ></Image>  
      </li>    
      <li>
      <Image src="/instagram.svg" alt="No image" width={25} height={25} ></Image>  
      </li>    
      <li>
      <Image src="/twitter.svg" alt="No image" width={25} height={25} ></Image>  
      </li>    

         
        
      </ul>
 </div>
 </div>
    </>
  )
}

export default about
