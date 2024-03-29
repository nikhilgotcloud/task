import styles from "./About.module.css";

const About = () => {
    return (
        <> 

       {/* desktop */}
        <div >
            <div className="text-center d-none d-md-block ">
            <div className={`${styles.about}  p-2 justify-content-evenly `}>
            <h3 className={`${styles.heading} mt-4`}>Why Pampered Chef?</h3>
                <p className={`${styles.para} `}>We help bridge the gap between the ideal
                    mealtime and the realities of today with quality
                    products, a supportive consultant, and solutions
                    to your mealtime challenges.
                </p>
                <h5 className={styles.smallhead}>Watch: What Pamperd Chef makes Unique</h5>
                </div>
            </div>
        </div>


            {/* mobile  */}
            <div className={`${styles.aboutone} d-flex-inline p-2 ms-0 d-block d-sm-none pb-4`}>

                
                <h3 className={`${styles.heading} text-center mt-3`}>Why Pampered Chef?</h3>
                <p className="ms-3 me-3">We help bridge the gap between the ideal
                    mealtime and the realities of today with quality
                    products, a supportive consultant, and solutions
                    to your mealtime challenges.
                </p>
                <h5 className={styles.smallhead}>Watch: What Pamperd Chef makes Unique</h5>
            </div>
            
        </>
    )
}

export default About