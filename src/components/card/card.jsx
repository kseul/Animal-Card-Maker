import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({ card }) => {
  const { name, age, color, type, hobby, message, theme, fileName, fileURL } =
    card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={url} alt='profile photo' />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.type}>{type}</p>
        <p className={styles.age}>
          <span>나이: </span>
          {age}
        </p>
        <p className={styles.color}>
          <span>털색: </span>
          {color}
        </p>
        <p className={styles.hobby}>
          <span>취미&특기: </span>
          {hobby}
        </p>
        <p className={styles.message}>"{message}"</p>
      </div>
    </li>
  );
};

export default Card;
