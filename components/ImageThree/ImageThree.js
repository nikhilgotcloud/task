import styles from "./ImageThree.module.css";

const ImageThree = () => {
  return (
    <>
    <div div className="d-flex-inline " >
         < div className={`${styles.header} ms-3 mb-3 mt-2 p-2 me-3 `}>

          {/* mobile */}
         <h3 className="d-block d-sm-none">
         <span className={`${styles.heading} px-2 ms-1`} >
                <span  className={`${styles.numberone} me-2 text-light`} >4</span>
                Get a discount and Help Your Friend 
                </span>
         </h3>
           {/* desktop */}
           <h3 className="d-none d-md-block">
           
                <span className={`${styles.heading} px-2 ms-1`} >
                <span  className={`${styles.number} me-2`} >4</span>
                Get a discount and Help Your Friend 
                </span>
            </h3>
           <div className="ms-3 mt-3"><img src="/1.png"  className="img-fluid " alt="" width={810}/></div> 
            
            {/* <Image className={`${styles.image} ms-3`} src="/3.png" alt="LiveCookingEvent" width={800} height={400}></Image> */}
            
         </div>
        </div>
    </>
  )
}

export default ImageThree