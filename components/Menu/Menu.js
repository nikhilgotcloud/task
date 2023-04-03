import {AiFillHome} from "react-icons/ai";
import styles from "./Menu.module.css"
// import {HiOutlineChatBubbleLeftRight} from "react-icons/hi";
import Image from "next/image";

const Menu = () => {
  return (
    <>
    
    <div className={`${styles.menu} m-3 p-3 d-flex-inline  `} >

    <i className={`${styles.homeicon}col-4 ms-3 me-md-2 my-md-0`}>
      <Image src="/home.png" width={22} height={20}></Image>
      {/* <AiFillHome style={{"color":"#1a5861","fontSize":"20", "marginBottom":"6px"}} ></AiFillHome> */}
      <b className={`${styles.home} ms-lg-1`}> Home</b></i>
    {/* <i><HiOutlineChatBubbleLeftRight className="col-4" style={{"fontSize":"25px"}}></HiOutlineChatBubbleLeftRight></i> */}
    <i className={`${styles.chaticon} col-4 mt-2 px-lg-3 mx-3 `} >
    <Image src="/chat.png" width={28} height={24}></Image>
      <b className={`${styles.chat}`}> Chit Chat</b></i>
    {/* <i class={`${styles.saveicon}bi bi-bookmark col-4 mt-1 mx-2 `}>/ */}
    <Image src="/save.png" width={19} height={22}></Image>
      <b className={`${styles.chat}`}> Saved Items</b>

    </div>
    
    </>
  )
}

export default Menu;