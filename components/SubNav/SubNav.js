import styles from "./SubNav.module.css";
import Image from "next/image";
import Link from "next/link";

const SubNav = () => {
  return (
    <>
      <nav className={`${styles.subnav} navbar navbar-expand-md `} >
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle text-light ms-lg-3" data-bs-toggle="dropdown" aria-expanded="false">
            Parties
          </button>
          <ul className={`${styles.navdropdown} dropdown-menu mt-2 ms-lg-3`} >
            <li><button className="dropdown-item text-light " type="button">Burger</button></li>
            <li><button className="dropdown-item text-light" type="button">Pizza</button></li>
            <li><button className="dropdown-item text-light" type="button">Chicken Biryani</button></li>
          </ul>
        </div>
        <div >

          <button className={`${styles.menu} navbar-toggler text-light border-0 `}type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            Menu <i class={`${styles.down} bi bi-caret-down-fill`}></i>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu Items</h5>
              <button type="button" className="btn-close btn-close-white text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className={`${styles.news} nav-item px-3`}>
                  <Link className="nav-link active text-light " aria-current="page" href="https://github.com/nikhilgotcloud/task">My News Feed</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link active text-light" aria-current="page" href="https://github.com/nikhilgotcloud/task">Content Manager</Link>
                </li>
                <li className="nav-item px-3" >
                  <Link className="nav-link active text-light" aria-current="page" href="https://github.com/nikhilgotcloud/task">Event Manager</Link>
                </li>
                 
                

              </ul>
            </div>
           

          </div>
        </div>
      
        <a className={`${styles.table} nav-link active text-light d-none d-md-block mt-2`} aria-current="page" href="/"><Image className={`${styles.eclipse} `} src="/bulb.png" alt="Ecllipse" width={10} height={15}></Image> Table Tips</a>



        
        

      </nav>
    </>
  )
}

export default SubNav