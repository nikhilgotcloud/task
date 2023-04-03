import styles from"./ImageFour.module.css"
import Image from "next/image"

const ImageFour = () => {
  return (
    <>
    <div div className="d-flex-inline " >
         < div className={`${styles.header} ms-3 mb-3 mt-2 p-2 me-3 `}>
           {/* mobile */}
         <h3 className="d-block d-sm-none">
         <span className="heading px-2 ms-1" >
                <span  className={`${styles.numberone} me-2 text-light`} >5</span>
                Get a Cookware Guide for Your Favourite Product
                <Image className="arrow " src="/arrow-right-black.png" width={14} height ={14} alt="qw"></Image>
                </span>
         </h3>
           {/* desktop */}
           <h3 className="d-none d-md-block mt-3">
                <span className="heading px-2 ms-1" >
                <span  className="number me-2" >5</span>
                Get a Cookware Guide for Your Favourite Product
                <Image className="arrow " src="/arrow-right-black.png" width={15} height={15} alt="qw"></Image>
                
                </span>
            </h3>
           <div className="ms-1 ms-lg-3 me-lg-3 mb-lg-2 me-1 mb-1"><img src="/4.png"  className="img-fluid " alt="" width={850}/></div> 
            
            {/* <Image className={`${styles.image} ms-3`} src="/3.png" alt="LiveCookingEvent" width={800} height={400}></Image> */}
            
         </div>
        </div>
    </>
  )
}

export default ImageFour