import styles from "./Invite.module.css";

const Invite = () => {
  return (
    <>
    <div className={`${styles.main} d-flex-inline p-2 mt-2 `}>
     <h3 className={`${styles.head} mt-3 ms-2`}> Invite friends to table</h3>
     <p className={`${styles.para} ms-2`}>The more the merrier! Invite friends to join Party, too.</p>

     <div className={`${styles.copy} row ms-2 me-2 `}>
     <div className="col-9">https://table.pamperchef.com </div>
     <div class="col-3"><button className={`${styles.button} m-2`}> Copy</button></div>
     </div>
     <span className={`${styles.span} mt-2 mb-2 ms-2 me-2 `}>-------------------------------or-------------------------------</span>
     <div className={`${styles.icon} btn btn-secondary m-2 px-5 pe-5 me-5`}><i class="bi bi-envelope-fill"></i> Email</div>
     <div className={`${styles.icon} btn btn-secondary m-2 px-5 pe-5 ms-5`}><i class="bi bi-chat-left-dots-fill"></i> Text</div>
     <div className={`${styles.icon} btn btn-secondary m-2 px-5 pe-5`}><i class="bi bi-facebook"></i> Share to Facebook </div>
     <div className={`${styles.icon} btn btn-secondary m-2 px-5 pe-5`}><i class="bi bi-chat-left-text-fill"></i> Invite Via Messages</div>
    </div>
    </>
  )
}

export default Invite