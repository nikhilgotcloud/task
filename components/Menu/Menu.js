
import styles from "./Menu.module.css"
import Image from "next/image";


const Menu = () => {
  return (
    <>
    
    <div className={`${styles.menu} m-3 p-3 d-flex-inline  `} >
      <div><Image className={`${styles.homeicon}col-4 ms-3 me-md-2 my-md-0`} src="/home.png" width={20} height={20}></Image>
      <b className={`${styles.home}`}> Home</b></div>

      <div><Image className={`${styles.chaticon} col-4 mt-2 px-lg-3 mx-3 `}  src="/chat.png" width={10} height={20}></Image>
      <b className={`${styles.chat}`}> Chit Chat</b></div>

      <div><Image className={`${styles.saveicon} col-4 mt-1 mx-2 `} src="/save.png" width={20} height={20}></Image>
      <b className={`${styles.save}`}> Saved Items</b></div>

    {/* <i className={`${styles.homeicon}col-4 ms-3 me-md-2 my-md-0`}><AiFillHome style={{"color":"#1a5861","fontSize":"20", "marginBottom":"6px"}} ></AiFillHome><b className={`${styles.home}`}> Home</b></i> */}
    {/* <i className={`${styles.chaticon}bi bi-chat-right col-4 mt-2 px-lg-3 mx-3 `} ><b className={`${styles.chat}`}> Chit Chat</b></i>
    <i class={`${styles.saveicon}bi bi-bookmark col-4 mt-1 mx-2 `}><b className={`${styles.save}`}> Saved Items</b></i> */}

    </div>
    
    </>
  )
}

export default Menu;