import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>Увы....</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данный товар отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
