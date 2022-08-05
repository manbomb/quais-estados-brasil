import { useContext, useState } from 'react';

import styles from './App.module.css';

import BrazilMap from './components/brazilMap/BrazilMap';
import InputText from './components/inputText/InputText';
import Regioes from './components/regioes/Regioes';
import GameContext from './contexts/Game';

import data from './data/estados.json';
import { removeAcento } from './utils';

const App = () => {

    const {
        setSelectedStates,
        selectStates
    } = useContext(GameContext);

    const [estado, setEstado] = useState('');
    const [error, setError] = useState(false);

    const enterNewEstado = () => {
        if (!estado) return;
        const estados = data.estados;

        const estadoLower = removeAcento(estado.toLowerCase());
        const estadosFiltred = estados.filter(e => {
            const eNameLower = removeAcento(e.nome.toLowerCase());
            if (eNameLower === estadoLower) return true;
            return false;
        });

        if (estadosFiltred.length < 1) {
            setError(true);
            return;
        }

        setError(false);

        const estadoFound = estadosFiltred[0];
        const newSelected = [...selectStates].filter(e => e.sigla !== estadoFound.sigla);
        newSelected.push(estadoFound);
        setSelectedStates(newSelected);

        setEstado('');
    };

    return <div className={styles.container}>
        <div className={styles.list}>
            <InputText
                onChange={setEstado}
                value={estado}
                onEnter={() => enterNewEstado()}
                error={error}
            />
            <Regioes selectStates={selectStates} />
        </div>
        <div className={styles.map}>
            <BrazilMap selectStates={selectStates.map(e => e.sigla.toLowerCase())} />
        </div>
    </div>;
};

export default App;
