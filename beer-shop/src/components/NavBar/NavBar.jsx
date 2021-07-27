import React, { useState } from "react";
import styles from "./NavBar.module.scss";




const NavBar = (props) => {
  
  const {placeholder,  handleChange, filter, handleChecked  } = props;


  return (
    <section className={styles.sideNav}>
      <div className={styles.navContent}>
        <div class={styles.logo}>
        <div className={styles.searchBox}>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
    {/* <div className={styles.filterItem}>
      <label>{label}</label>
      <input type="checkbox" value={value} onClick={toggleCheckbox} />
    </div> */}
        </div>
  

      </div>
      
    </section>
    // Need to filter the beers from the nav bar with check boxes
  );
};

export default NavBar;