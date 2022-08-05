import { useContext } from 'react';

import styles from './OverlayFinished.module.css';

import GameContext from '../../contexts/Game';

const OverlayFinished = () => {

    const {
        completed
    } = useContext(GameContext);

    if (!completed) return null;

    return <div className={styles.container}>
        <div className={styles.innerContainer}>
            <h1>Parabéns!</h1>
            <h3>Você se lembrou de todos os estados do Brasil, compartilhe este jogo com seus amigos para desafiá-los.</h3>
            <h5>Conheça mais sobre o desenvolvedor deste game: <a target='_blank' href="https://github.com/manbomb">@manbomb</a></h5>
        </div>
        <div className={styles.overlay}></div>
    </div>;
};

export default OverlayFinished;