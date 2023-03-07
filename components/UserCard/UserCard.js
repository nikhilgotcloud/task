import styles from "./UserCard.module.css";
import Image from "next/image";
import { useState } from 'react';

function MyButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };}

const UserCard = () => {
  return (
    <>
    <div className={`${styles.user} row m-3 p-3  `}>
    
        <div className="row userCard">
            <div className="col-md-5">
                <div className={`${styles.info} row m-lg-1`}>
                    <div className={`${styles.info} col-md-3`} >
                      <span>
                        <Image  className={styles.image} src="/6.jpg" alt="profile" width={60} height={60} ></Image>
                      </span>
                    </div>
                    <div className={`${styles.maininfo}  col-md-9  p-0 `} >
                   
                        <span  className={`${styles.name} `}>Heather Host's Party
                        <p  className={styles.description} >with Consultant Taylor Inman</p>
                        
                        <button className={`${styles.button} p-1  border-0`}>Accept Invite</button>
                        <a className={`${styles.detail}  `}href="/">Details</a>
                       
                        </span>
                    </div>

                </div>
            </div>
            
            </div>

    </div>
    </>

  )
}

export default UserCard