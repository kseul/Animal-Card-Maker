import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Edit</h1>
    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
  </section>
);

export default Editor;
