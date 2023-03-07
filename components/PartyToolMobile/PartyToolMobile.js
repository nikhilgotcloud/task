import styles from "./PartyTool.module.css";

const PartyToolMobile = () => {
  return (
    <>
      <div className={`${styles.party}  mb-3 mt-1 p-2 justify-content-evenly`}>
        <p className={`${styles.head} ms-2`}>Party Tools <a className={`${styles.only} `} >Only visible to you</a></p>
        <div className={`${styles.icon}`}>
          <i className="bi bi-gear col-4 mt-2 ms-1" ><b className={`${styles.chat}`}> Settings</b></i>
          <i class="bi bi-chat-square-dots mx-5"><b className={`${styles.save}`}> Text Guest</b></i>
          <i class="bi bi-clipboard2-data col-4 mt-1 ms-1 "><b className={`${styles.save}`}> Polls</b></i>
        </div>
      </div>

    </>
  )
}

export default PartyToolMobile