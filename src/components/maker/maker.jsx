import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Hamong',
      age: '1',
      color: 'white',
      type: '승연이네 댕댕이',
      hobby: '집 엉망으로 만들기',
      message: '다 뿌셔버리게써',
      theme: 'light',
      fileName: 'hamong',
      fileURL: '/images/hamong.jpeg',
    },
    2: {
      id: '2',
      name: 'Berry',
      age: '5',
      color: 'brown',
      type: '하은이네 댕댕이',
      hobby: '인형 망가뜨리기',
      message: '노는게 젤조앙',
      theme: 'light',
      fileName: 'berry',
      fileURL: '/images/berry.jpeg',
    },
    3: {
      id: '3',
      name: 'Nalsoon',
      age: '4',
      color: 'black',
      type: '재성이네 댕댕이',
      hobby: '산책하기',
      message: '노라죠 주인!',
      theme: 'light',
      fileName: 'nalsoon',
      fileURL: '/images/nalsoon.jpeg',
    },
    4: {
      id: '4',
      name: 'DangE',
      age: '8',
      color: 'white',
      type: '윤섭이네 댕댕이',
      hobby: '코딩 방해하기',
      message: '언제와????',
      theme: 'light',
      fileName: 'dangE',
      fileURL: '/images/dangE.jpg',
    },
    5: {
      id: '5',
      name: 'Ume',
      age: '5',
      color: 'black',
      type: '정준이네 댕댕이',
      hobby: '귀여운 표정짓기',
      message: '내가 쩰 귀여움',
      theme: 'light',
      fileName: 'ume',
      fileURL: '/images/ume.jpeg',
    },
  });

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
  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
