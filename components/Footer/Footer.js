import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  useEffect(() => {
    ReactDOM.render(
      <div className="fixed-bottom ">
        <div className="container">
          <div className="row">
            <div className={`${styles.footer} col p-2`}>
              <div className={`${styles.icon} justify-content-evenly`}>
                <Image className=" mx-1 p-2" src="/homeft.png" width={40} height={40} alt="qw" />
                <Image className=" mx-3 p-2 " src="/chat.png" width={45} height={40} alt="qw" />
                <Image className=" mx-2 p-2" src="/save.png" width={35} height={35} alt="qw" />
                <Image className=" mx-3  p-2" src="/arrow-up-from-square.png" width={35} height={35} alt="qw" />
                <button className={`${styles.button} p-1  border-0 text-light  p-2 ps-3 pe-3 `}>Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('footer')
    );
  }, []);

  return (
    <div id="footer"></div>
  );
}

export default Footer;
