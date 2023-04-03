import styles from "./PartyTool.module.css";
import Image from "next/image";
import Link from "next/link";

const PartyTool = () => {
  return (
    <>
<div className={`${styles.party}   mb-2 mt-1 p-2 justify-content-evenly`}>
        <p className={`${styles.head} ms-2`}>Party Tools <p className={`${styles.only} `} >Only visible to you</p></p>
        <div className={`${styles.icon}`}>
          <i className="bi bi-gear col-4 mt-2 ms-2 pe-3" ><b className={`${styles.chat}`}> Settings</b></i>
          <i className={`${styles.poll } bi bi-chat-square-dots  pe-3`}><b className={`${styles.chat}`}> Text Guest</b></i>
          <Image className={`${styles.poll}`} src="/poll.png" width={18} height={18} alt="qw"></Image>
            <b className={`${styles.chat}`}> Polls</b>
        </div>
      </div>
    </>

  )
}

export default PartyTool;