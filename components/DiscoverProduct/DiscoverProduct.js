import styles from "./DiscoverProduct.module.css";
import Image from "next/image";

const DiscoverProduct = () => {
    return (
        <>
            < div className="d-flex-inline " >
                <div className={`${styles.discover} ms-3 mb-3 mt-2 p-2 me-3 `} >
                    <div>
                        {/* heading for mobile */}
                        <h3 className="d-block d-sm-none">
                            <span className="heading px-2 " >
                                <span className="numberone me-2 text-light ">1</span>
                                Discover Products Solutions
                            </span>
                        </h3>

                        {/* heading for desktop */}
                        <h3 className="d-none d-md-block mt-3">
                            <span className="heading px-2 ms-1" >
                                <span className="number me-2" >1</span>
                                Discover Products to Make a Mealtime Easier
                            </span>
                        </h3>


                        {/* card for desktop */}
                        <div className={`${styles.card}  row ms-lg-2  text-light mt-3  `} >

                            <div className={`${styles.cardone} col-lg-5 col-5  d-flex align-items-center pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pb-3 pt-4`}>I have 30 Minutes or less
                                <br /><br />
                                <Image className={`${styles.arrowright} d-none d-md-block `} src="/arrow-right.png" width={15} height={15} alt="qw"></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex mt-5 ms-5  "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardtwo} col-lg-5 col-5 d-flex align-items-center  pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pt-4 me-1 pb-3`} >I want to avoid Cleanup
                                <br /><br />
                                <Image className={`${styles.arrowrighttwo} d-none d-md-block `} src="/arrow-right.png" width={15} height={15} alt="qw"></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex-inline mt-5 ms-5 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardthree} col-lg-5 col-5 d-flex align-items-center pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pt-4 pb-3 `}>I&apos;m in a coking rut
                                <br /><br />
                                <Image className={`${styles.arrowrightthree} d-none d-md-block`} src="/arrow-right.png" width={15} height={15} alt="qw"></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex-inline mt-5 ms-4 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardfour} col-lg-5 col-5 d-flex align-items-center  pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pt-4 pb-3`} >I&apos;m on a budget
                                <br /><br />
                                <Image className={`${styles.arrowrightfour} d-none d-md-block `} src="/arrow-right.png" width={15} height={15} alt="qw"></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex-inline mt-5 ms-4 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardfive} col-lg-5 col-5 d-flex align-items-center  pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pt-4 pb-3`} >I want to prep ahead
                                <br /><br />
                                <Image className={`${styles.arrowrightfive} d-none d-md-block`} src="/arrow-right.png" width={15} height={15} alt="qw" ></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex-inline mt-5 ms-5 px-3 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>
                            <div className={`${styles.cardsix} col-lg-5 col-5 d-flex align-items-center pt-lg-4 pb-lg-3 ps-lg-4 m-lg-2 m-1 p-sm-4 pt-4 pb-3 `} >I have picky eaters
                                <br /><br />
                                <Image className={`${styles.arrowrightsix} d-none d-md-block`} src="/arrow-right.png" width={15} height={15} alt="qw"></Image>
                                <Image className={`${styles.arrowrightmob} d-block d-sm-none `} src="/circlearrow.png" width={15} height={15} alt="qw"></Image>
                                {/* <div className="d-flex-inline mt-5 ms-5 px-3 "><i class="bi bi-arrow-right"></i> </div> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default DiscoverProduct
