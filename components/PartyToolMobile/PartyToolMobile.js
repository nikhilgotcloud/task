import styles from "./PartyTool.module.css";
import Image from "next/image";

const PartyToolMobile = () => {
  return (
    <>
      <div className={`${styles.party}  mb-3 mt-1 p-2 justify-content-evenly`}>
        <p className={`${styles.head} ms-2`}>Party Tools <a className={`${styles.only} `} >Only visible to you</a></p>
        <div className={`${styles.icon}`}>
          <i className="bi bi-gear col-4 mt-2 ms-1" ><b className={`${styles.chat}`}> Settings</b></i>
          <i class="bi bi-chat-square-dots mx-5"><b className={`${styles.chat}`}> Text Guest</b></i>
          <Image className={`${styles.poll}`} src="/poll.png" width={18} height={18} alt="qw"></Image>
            <b className={`${styles.chat}`}> Polls</b>
        </div>
      </div>

    </>
  )
}

export default PartyToolMobile