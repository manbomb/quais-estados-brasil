import { useContext } from 'react';

import styles from './App.module.css';

import BrazilMap from './components/brazilMap/BrazilMap';
import InputText from './components/inputText/InputText';
import OverlayFinished from './components/overlayFinished/OverlayFinished';
import Regioes from './components/regioes/Regioes';
import GameContext from './contexts/Game';

const App = () => {

    const {
        selectStates,
        enterNewEstado,
        error,
        setEstado,
        estado
    } = useContext(GameContext);

    return <div className={styles.container}>
        <OverlayFinished />
        <div className={styles.list}>
            <InputText
                onChange={setEstado}
                value={estado}
                onEnter={() => enterNewEstado(estado)}
                error={error}
                focus={true}
                placeholder={'Digite o nome de um estado'}
            />
            <Regioes selectStates={selectStates} />
        </div>
        <div className={styles.map}>
            <BrazilMap selectStates={selectStates.map(e => e.sigla.toLowerCase())} />
        </div>
    </div>;
};

export default App;
