import React from "react";
import styles from "./NavBar.module.scss";
import SearchBox from "../SearchBox";
import FilterList from "../FilterList";


const NavBar = (props) => {
  const { filters, handleChange, handleChecked } = props;
  return (
    <section className={styles.sideNav}>
      <div className={styles.navContent}>
        <div class={styles.logo}>
          
        </div>
        <SearchBox placeholder="Search..." handleChange={handleChange} />
        <FilterList filters={filters} handleChecked={handleChecked} />
      </div>
    </section>
  );
};

export default NavBar;