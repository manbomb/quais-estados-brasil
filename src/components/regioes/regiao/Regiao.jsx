import styles from './Regiao.module.css';

const Regiao = ({ regiao, selectStates }) => {
    return <div className={styles.container}>
        {regiao}
    </div>;
};

export default Regiao;