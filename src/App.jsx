import { useState } from 'react';

import styles from './App.module.css';

import BrazilMap from './components/brazilMap/BrazilMap';
import InputText from './components/inputText/InputText';

const App = () => {

    const [estado, setEstado] = useState('');

    return <div className={styles.container}>
        <div className={styles.list}>
            <InputText onChange={setEstado} value={estado} onEnter={() => {}} />
        </div>
        <div className={styles.map}>
            <BrazilMap />
        </div>
    </div>;
};

export default App;
