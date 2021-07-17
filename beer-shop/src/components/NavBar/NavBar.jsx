import React from "react";
import styles from "./NavBar.module.scss";




const NavBar = (props) => {
  const {  handleChange,  } = props;
  return (
    <section className={styles.sideNav}>
      <div className={styles.navContent}>
        <div class={styles.logo}>

        </div>
  

      </div>
      
    </section>
    // Need to filter the beers from the nav bar with check boxes
  );
};

export default NavBar;