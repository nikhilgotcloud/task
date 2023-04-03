import styles from "./Invite.module.css";

const Invite = () => {
  return (
    <>
    <div className={`${styles.main} d-flex-inline p-2 mt-2 `}>
     <h3 className={`${styles.head} mt-3 ms-2`}> Invite friends to table</h3>
     <p className={`${styles.para} ms-2`}>The more the merrier! Invite friends to join Party, too.</p>

     < div className={`${styles.copy} row ms-2 me-2 `}>
     <div className={`${styles.link} col-8  col-lg-6`}>https://table.pamperedchef.com/par<br></br>
     ty/heather-hosts-pary  </div>
     <div className="col-4 ms-5"><button className={`${styles.button} ps-3 pe-3 pt-2 pb-2 `}>Copy</button></div>
     </div>
     <span className={`${styles.span} d-none d-md-block mt-2 mb-2  ms-2 me-2 `}>---------------------------------or-----------------------------</span>
     <div className={`${styles.icon} btn btn-secondary  mt-2 px-5  ms-lg-4`}><i class="bi bi-envelope-fill ps-5 "></i> Email</div>
     <br /><br />
     <div className={`${styles.icon} btn btn-secondary  px-5  ms-lg-4`}><i class="bi bi-chat-left-dots-fill ps-5"></i> Text</div>
     <br /><br />
     <div className={`${styles.icon} btn btn-secondary  px-3  ms-lg-4`}><i class="bi bi-facebook ps-5"></i> Share to Facebook </div>
     <br /><br />
     <div className={`${styles.icon} btn btn-secondary  px-3 mb-lg-2 ms-lg-4`}><i class="bi bi-chat-left-text-fill ps-5"></i> Invite Via Messages</div>
    </div>
    </>
  )
}

export default Invite