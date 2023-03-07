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

                       <div className="d-block d-sm-none"><UserCardMobile/></div>

                       <div className="d-block d-sm-none">
                        <PartyToolMobile/>
                       </div>

                            <div className="d-none d-md-block">
                            <Menu/> </div>


                            <div className="row ms-1 d-none d-md-block">
                                <h2>Hey Nancy,</h2>
                                <p>We get it, mealtime is hard.</p>
                            </div>

                            <div className="text-center d-block d-sm-none mt-3">
                            <h2>Hey Nancy,</h2>
                            <p>We get it, mealtime is hard.</p>
                            </div>

                             <div className="row"><DiscoverProduct/>
                             <ImageOne/>
                             <ImageTwo/>
                             <ImageThree/>
                             <ImageFour/>
                             </div> 
                             <div className="row m-3 ">
                              <About/>
                             
                            
                            </div>
                            </div>
                             {/* right portion */}
                            <div class="col-lg-4 mt-3 mb-3 ">
                            <Shop/>
                             <div className="d-none d-md-block">
                        <PartyTool/>
                             </div>
                             <Guest/>
                             <Invite/>
                            </div>
                            
                        
                    </div>
                </div> 
            </div> 
            <Footer/>
            </div>
            
        </>
    )
}

export default MainSection;