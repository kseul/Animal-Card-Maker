import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Hamong',
      age: '1',
      color: 'white',
      title: '댕댕이',
      hobby: '집 엉망으로 만들기',
      message: '다 뿌셔버리게써',
      fileName: 'hamong',
      fileURL: 'hamong.png',
    },
    {
      id: '2',
      name: 'Berry',
      age: '5',
      color: 'brown',
      title: '댕댕이',
      hobby: '인형 망가뜨리기',
      message: '노는게 젤조앙',
      fileName: 'berry',
      fileURL: 'berry.png',
    },
    {
      id: '3',
      name: 'Nalsoon',
      age: '6',
      color: 'black',
      title: '댕댕이',
      hobby: '산책하기',
      message: '놀아줘 주인!',
      fileName: 'nalsoon',
      fileURL: 'nalsoon.png',
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
