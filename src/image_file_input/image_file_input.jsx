import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUplader, name, onFileChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = (e) => {
    // UI핸들링이 어려운 기존 인풋을 가리고, 직접 작성한 UI를 보여주고, UI클릭시 input이 작동되게 한다.
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    setIsLoading(true);
    const uploaded = await imageUplader.upload(e.target.files[0]);
    setIsLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {!isLoading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {isLoading && <div className={styles.isLoading}></div>}
    </div>
  );
};

export default ImageFileInput;
