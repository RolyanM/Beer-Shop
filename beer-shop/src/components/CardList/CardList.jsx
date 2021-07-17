import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {

  const { beers } = props;
 


  return (
    <section className={styles.cardList}></section>

  )
}

export default CardList
