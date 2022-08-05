const { createContext, useState } = require("react");

const GameContext = createContext({
    selectStates: [],
    setSelectedStates: (selectStates = []) => { },
    setOpenedRegiao: (openedRegiao = '') => { },
    openedRegiao: ''
});

export const GameProvider = ({ children }) => {

    const [selectStates, setSelectedStates] = useState([]);
    const [openedRegiao, setOpenedRegiao] = useState('');

    return <GameContext.Provider
        value={{
            selectStates,
            setSelectedStates,
            openedRegiao,
            setOpenedRegiao
        }}
    >
        {children}
    </GameContext.Provider>;
};

export default GameContext;