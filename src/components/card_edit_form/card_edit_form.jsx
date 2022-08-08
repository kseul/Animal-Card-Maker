import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const typeRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();
  const hobbyRef = useRef();
  const messageRef = useRef();

  const { name, age, color, type, hobby, message, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        ref={typeRef}
        className={styles.input}
        type='text'
        name='type'
        value={type}
        onChange={onChange}
      />
      <select
        ref={ageRef}
        className={styles.select}
        name='age'
        value={age}
        onChange={onChange}
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
      </select>
      <input
        ref={colorRef}
        className={styles.input}
        type='text'
        name='color'
        value={color}
        onChange={onChange}
      />
      <input
        ref={hobbyRef}
        className={styles.input}
        type='text'
        name='hobby'
        value={hobby}
        onChange={onChange}
      />

      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};
export default CardEditForm;
