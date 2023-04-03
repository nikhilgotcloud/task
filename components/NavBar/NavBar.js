import styles from "./NavBar.module.css";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
   
    <nav className="navbar ">
       
        <div className="container-fluid ">
        
          <a className="navbar-brand ms-md-1 ms-lg-3" href="/">
            <img src="5.png"  alt="Logo" width="150" height="25" />
          </a>
          
          <div className="d-md-flex-inline ">
           <b><i  className={`${styles.bell} bi bi-bell p-1   `}><Image className={`${styles.eclipse} `} src="/7.png" alt="Ecllipse" width={6} height={6} ></Image></i></b>

           <button type="button" class="btn btn-outline-none ms-3"><b className={`${styles.profile} `}>Profile</b></button>
           
           </div>
        </div>
        
        
      </nav>
      
    
    </>




  )
}

export default NavBar