import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="fixed-bottom d-block d-sm-none">
    <div className="container">
    <div className="row">
      <div className={`${styles.footer} col p-2`}>
        <div className={`${styles.icon} justify-content-evenly`}>
        {/* <i className={`${styles.home} bi bi-house mx-2 p-2`}></i> */}
        <Image className=" mx-1 p-2" src="/homeft.png " width={40} height={40} alt="qw"></Image>
        <Image className=" mx-4 p-2 " src="/chat.png " width={45} height={40} alt="qw"></Image>
        <Image className=" mx-2 p-2" src="/save.png " width={35} height={35} alt="qw"></Image>
        <Image className=" mx-3  p-2" src="/arrow-up-from-square.png " width={35} height={35} alt="qw"></Image>
        {/* <i className={`${styles.chat}bi bi-chat-right mx-3 p-2`} ><Image className={`${styles.eclipse} `} src="/7.png" alt="Ecllipse" width={8} height={8}></Image></i> */}
        {/* <i className={`${styles.save} bi bi-bookmark mx-3 p-2`}></i>
        <i className={`${styles.upload}bi bi-upload mx-2 p-2 `}></i> */}
        <button className={`${styles.button} p-1  border-0 text-light  p-2 ps-3 pe-3 `}>Shop</button>

          
        </div>
        
      </div>
    </div>
  </div>

    </div>
    </>
  )
}

export default Footer