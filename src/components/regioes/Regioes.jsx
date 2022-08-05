import styles from './Regioes.module.css';

import data from '../../data/estados.json';
import Regiao from './regiao/Regiao';

const Regioes = ({ selectStates }) => {
    const todasRegioes = data.estados
        .map(e => e.regiao)
        .reduce((ac, r) => {
            const newAc = [...ac];
            if (newAc.includes(r)) return newAc;
            newAc.push(r);
            return newAc;
        }, []);

    return <div className={styles.container}>
        {todasRegioes.map(regiao => <Regiao regiao={regiao} selectStates={selectStates} key={regiao} />)}
    </div>;
};

export default Regioes;