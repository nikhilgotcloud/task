import styles from "./DiscoverProduct.module.css";

const DiscoverProduct = () => {
    return (
        <>
            < div className="d-flex-inline " >
                <div className={`${styles.discover} ms-3 mb-3 mt-2 p-2 me-3 `} >
                    <div>
                        {/* heading for mobile */}
                        <h3 className="d-block d-sm-none">
                            <span className={`${styles.heading} px-2 `} >
                                <span className={`${styles.numberone} me-2 text-light`} >1</span>
                                Discover Products Solutions
                            </span>
                        </h3>

                        {/* heading for desktop */}
                        <h3 className="d-none d-md-block">
                            <span className={`${styles.heading} px-2 ms-1`} >
                                <span className={`${styles.number} me-2`} >1</span>
                                Discover Products to Make a Mealtime Easier
                            </span>
                        </h3>

                        {/* heading for mobile */}
                        {/* card for desktop */}
                        <div className={`${styles.card} row justify-content-evenly `} >

                            <div className={`${styles.cardone} col-md-5  discover d-flex align-items-center discover p-4 m-2 text-light ms-md-2`}>I have 30 Minutes or less
                                {/* <div className="d-flex mt-5 ms-5  "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardtwo} col-md-5 discover d-flex align-items-center discover p-4 m-2 text-light`} >I want to avoid Cleanup
                                {/* <div className="d-flex-inline mt-5 ms-5 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardthree} col-md-5 discover d-flex align-items-center discover p-4 m-2 text-light`} >I'm in a coking rut
                                {/* <div className="d-flex-inline mt-5 ms-4 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardfour} col-md-5 discover d-flex align-items-center discover p-4 m-2 text-light`} >I'm on a budget
                                {/* <div className="d-flex-inline mt-5 ms-4 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>

                            <div className={`${styles.cardfive} col-md-5 discover d-flex align-items-center discover p-4 m-2 text-light`} >I want to prep ahead
                                {/* <div className="d-flex-inline mt-5 ms-5 px-3 "><i class="bi bi-arrow-right"></i></div> */}
                            </div>
                            <div className={`${styles.cardsix} col-md-5 discover d-flex align-items-center discover p-4 m-2 text-light`} >I have picky eaters
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