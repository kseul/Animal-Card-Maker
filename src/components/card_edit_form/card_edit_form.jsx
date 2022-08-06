import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { name, age, color, type, hobby, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        defaultValue={name}
      />
      <input
        className={styles.input}
        type='text'
        name='type'
        defaultValue={type}
      />
      <select className={styles.select} name='age' defaultValue={age}>
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
        className={styles.input}
        type='text'
        name='color'
        defaultValue={color}
      />
      <input
        className={styles.input}
        type='text'
        name='hobby'
        defaultValue={hobby}
      />
      <textarea
        className={styles.textarea}
        name='message'
        defaultValue={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};
export default CardEditForm;
