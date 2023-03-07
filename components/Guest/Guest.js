import styles from "./Guest.module.css";

const Guest = () => {
  return (
    <>
     <div className={`${styles.main} d-flex-inline p-2`}>
      <p className={`${styles.head} ms-2`}>4 Guest Attending</p>

      <div className="row">

        <div className="col-lg-6 mb-4">
            <span className={`${styles.span} justfy-content-center text-light p-2`}>MM</span> Mary Mohan
        </div>
        <div className="col-lg-6 mb-4">
            <span className={`${styles.span} justfy-content-center text-light p-2`}>BM</span> Bree Mangun
        </div>
        <div className="col-lg-6 mb-4">
            <span className={`${styles.span} justfy-content-center text-light p-2`}>SD</span> Shiv Dutt
        </div>
        <div className="col-lg-6 mb-4">
            <span className={`${styles.span} justfy-content-center text-light p-2`}> BG</span> Brandon Grant
        </div>
        <div className="col-12"><button className={`${styles.button} ms-2`}>Show All</button></div>
         
      </div>
     </div>
    </>
  )
}

export default Guest