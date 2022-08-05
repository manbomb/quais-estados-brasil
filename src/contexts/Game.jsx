import { useState, createContext, useEffect } from 'react';

import data from '../data/estados.json';

import { removeAcento } from '../utils';

const GameContext = createContext({
    selectStates: [],
    setSelectedStates: (selectStates = []) => { },
    setOpenedRegiao: (openedRegiao = '') => { },
    openedRegiao: '',
    enterNewEstado: (estado = '') => { },
    error: false,
    setError: (error = false) => { },
    estado: '',
    setEstado: (estado = '') => { },
    completed: false
});

export const GameProvider = ({ children }) => {

    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [estado, setEstado] = useState('');
    const [selectStates, setSelectedStates] = useState([]);
    const [openedRegiao, setOpenedRegiao] = useState('');

    const enterNewEstado = (estado) => {
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

    const verifyGame = () => {
        const estados = data.estados;
        if (estados.length === selectStates.length) {
            setCompleted(true);
        }
    };

    useEffect(() => {
        verifyGame();
    }, [selectStates]);

    return <GameContext.Provider
        value={{
            selectStates,
            setSelectedStates,
            openedRegiao,
            setOpenedRegiao,
            enterNewEstado,
            error,
            setError,
            estado,
            setEstado,
            completed
        }}
    >
        {children}
    </GameContext.Provider>;
};

export default GameContext;