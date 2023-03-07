import styles from "./UserCardMobile.module.css";
import Image from "next/image";

const UserCardMobile = () => {
  return (
    <>
    <div className={`${styles.user} `}>
    <div className={`${styles.info} row `}>
                    <div className={`${styles.info} `} >
                      <span>
                        <Image  className={`${styles.image} mt-2 `} src="/6.jpg" alt="profile" width={60} height={60} ></Image>
                      </span>
                    </div>
                    <div className={`${styles.maininfo}  col-md-9 p-0 `} >
                   
                        <span  className={`${styles.name} `}>Heather Host's Party
                        
                        <p  className={styles.description} >with Consultant Taylor Inman<a className={`${styles.detail} pb-5 `}href="/">Details</a></p>
                       
                        </span>
                    </div>
                    
                </div>
    </div>
    </>
  )
}

export default UserCardMobile