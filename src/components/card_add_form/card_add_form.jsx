import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const typeRef = useRef();
  const ageRef = useRef();
  const colorRef = useRef();
  const hobbyRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      type: typeRef.current.value || '',
      age: ageRef.current.value || '',
      color: colorRef.current.value || '',
      hobby: hobbyRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    if (card.name === '') return;
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        ref={typeRef}
        className={styles.input}
        type='text'
        name='type'
        placeholder='Type'
      />
      <select
        ref={ageRef}
        className={styles.select}
        name='age'
        placeholder='Age'
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
        placeholder='Color'
      />
      <input
        ref={hobbyRef}
        className={styles.input}
        type='text'
        name='hobby'
        placeholder='Hobby'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='Message'
      />
      <div className={styles.fileInput}>
        {/* name속성을 전달하지 않으면 porps으로 받을 수가 없으므로 'No file' 로만 뜨게 됨 */}
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};
export default CardAddForm;
