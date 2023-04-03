import styles from "./Guest.module.css";

const Guest = () => {
  return (
    <>
     <div className={`${styles.main} d-flex-inline p-2`}>
      <p className={`${styles.head} ms-2`}>4 Guest Attending</p>

      <div className="row ">

        <div className={`${styles.name} col-6 col-lg-6 mb-4 `}>
            <span className={`${styles.spanone} justfy-content-center text-light `}>MM</span> Mary Mohan
        </div>
        <div className={`${styles.name} col-6 col-lg-6 mb-4 `}>
            <span className={`${styles.spantwo} justfy-content-center text-light `}>BM</span> Bree Mangun
        </div>
        <div className={`${styles.name} col-6 col-lg-6 mb-4`}>
            <span className={`${styles.spanthree} justfy-content-center text-light p-2 `}>SD</span> Shiv Dutt
        </div>
        <div className={`${styles.name} col-6 col-lg-6 mb-4`}>
            <span className={`${styles.spanfour} justfy-content-center text-light p-2`}>BG</span> Brandon Grant
        </div>
        <div className="col-12"><button className={`${styles.button} ms-2 px-3 pe-3 pt-2 pb-2`}>Show All</button></div>
         
      </div>
     </div>
    </>
  )
}

export default Guest