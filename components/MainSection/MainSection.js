import About from "../About/About";
import DiscoverProduct from "../DiscoverProduct/DiscoverProduct";
import Footer from "../Footer/Footer";
import Guest from "../Guest/Guest";
import ImageFour from "../ImageFour/ImageFour";
import ImageOne from "../imageone/ImageOne";
import ImageThree from "../ImageThree/ImageThree";
import ImageTwo from "../ImageTwo/ImageTwo";
import Invite from "../Invite/Invite";
import Menu from "../Menu/Menu";
import PartyTool from "../PartyTool/PartyTool";
import PartyToolMobile from "../PartyToolMobile/PartyToolMobile";
import Shop from "../Shop/Shop";
import UserCard from "../UserCard/UserCard";
import UserCardMobile from "../UserCardMobile/UserCardMobile";
import styles from "./MainSection.module.css"


const MainSection = () => {
    return (
        <>

            <div className={styles.main}>
                < div className="d-md-flex-inline " >
                    <div className="container-fluid" >

                        <div className={`${styles.margin} row `}>
                            {/* left portion */}
                            <div class="col-lg-8 mt-3  ">
                                <div className="d-none d-md-block"><UserCard /></div>

                                <div className="d-block d-sm-none"><UserCardMobile /></div>

                                <div className="d-block d-sm-none">
                                    <PartyToolMobile />
                                </div>

                                <div className="d-none d-md-block">
                                    <Menu /> </div>

                                {/* for desktop */}
                                <div className="row ms-1 d-none d-md-block">
                                    <h2 className={`${styles.head} `}>Hey Nancy,</h2>
                                    <p className={`${styles.para} `}>We get it, mealtime is hard.</p>
                                </div>

                                {/* for mobile */}
                                <div className="text-center d-block d-sm-none mt-3">
                                    <h2 className={`${styles.head} `}>Hey Nancy,</h2>
                                    <p className={`${styles.para} `}>We get it, mealtime is hard.</p>
                                </div>

                                <div className="row"><DiscoverProduct />
                                    <ImageOne />
                                    <ImageTwo />
                                    <ImageThree />
                                    <ImageFour />
                                </div>
                                <div className="row  ">
                                    <About />


                                </div>
                                <div className="d-block d-sm-none">
                                <a className={`${styles.backmob}`} href="/"><i className="bi bi-arrow-up"></i></a>
                                    <a className={`${styles.backonemob}`} href="/"> Back to top</a>

                                </div>
                                <div className="d-block d-sm-none mb-4 mt-3"></div>
                                <div >
                                <a className={`${styles.back}`} href="/"><i className="bi bi-arrow-up"></i></a>
                                    <a className={`${styles.backone}`} href="/"> Back to top</a>
                                </div>
                            </div>
                            {/* right portion */}
                            <div className=" d-none d-md-block col-lg-4 mt-3 mb-3 ">
                                <Shop />
                                
                                    <PartyTool />
                                
                                <Guest />
                                <Invite />
                                <div className="mb-5"></div>
                            </div>


                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default MainSection;