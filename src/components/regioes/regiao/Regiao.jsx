import { useEffect, useState } from 'react';
import styles from './Regiao.module.css';

import data from '../../../data/estados.json';

const Regiao = ({ regiao, selectStates }) => {

    const [estados, setEstados] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [open, setOpen] = useState(false);

    const todosEstadosByRegiao = data.estados.filter(e => e.regiao === regiao);

    useEffect(() => {
        const estadosByRegiao = [...selectStates]
            .filter(e => e.regiao === regiao);
        setEstados(estadosByRegiao);

        if (estados.length === todosEstadosByRegiao.length) setCompleted(true);
    }, [regiao, selectStates]);

    return <div className={styles.container}>
        <div className={`${styles.closed} ${completed ? styles.completed : ''}`} onClick={() => setOpen(!open)}>
            <h1>{regiao}</h1>
            <span>{estados.length}/{todosEstadosByRegiao.length}</span>
        </div>
        <div
            className={styles.open}
            style={{
                display: open && estados.length ? 'flex' : 'none'
            }}
        >
            {estados.map(e => <span>{e.nome}</span>)}
        </div>
    </div>;
};

export default Regiao;