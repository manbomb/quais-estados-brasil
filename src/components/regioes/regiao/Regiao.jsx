import { useContext, useEffect, useState } from 'react';
import styles from './Regiao.module.css';

import data from '../../../data/estados.json';

import GameContext from '../../../contexts/Game';

const Regiao = ({ regiao, selectStates }) => {

    const {
        openedRegiao,
        setOpenedRegiao
    } = useContext(GameContext);

    const [estados, setEstados] = useState([]);
    const [completed, setCompleted] = useState(false);
    
    const openClose = () => {
        if (openedRegiao === regiao) {
            setOpenedRegiao('');
        } else {
            setOpenedRegiao(regiao);
        }
    };

    const todosEstadosByRegiao = data.estados.filter(e => e.regiao === regiao);

    useEffect(() => {
        const estadosByRegiao = [...selectStates]
            .filter(e => e.regiao === regiao);
        setEstados(estadosByRegiao);

    }, [regiao, selectStates]);
    
    useEffect(() => {
        if (estados.length === todosEstadosByRegiao.length) setCompleted(true);
    }, [estados]);

    return <div className={styles.container}>
        <div className={`${styles.closed} ${completed ? styles.completed : ''}`} onClick={() => openClose()}>
            <h1>{regiao}</h1>
            <span>{estados.length}/{todosEstadosByRegiao.length}</span>
        </div>
        <div
            className={styles.open}
            style={{
                display: openedRegiao === regiao && estados.length ? 'flex' : 'none'
            }}
        >
            {estados.map(e => <span key={e.sigla}>{e.nome}</span>)}
        </div>
    </div>;
};

export default Regiao;