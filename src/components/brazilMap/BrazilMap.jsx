import { useEffect } from 'react';
import styles from './BrazilMap.module.css';

import { BrMap } from './brmap/brmap';

const BrazilMap = ({ onClick = () => {}, selectStates = [], className = '', ...props }) => {
    useEffect(() => {
        BrMap.Draw({
            wrapper: `#${styles.map}`,
            selectStates,
            cssFill: {
                shape: 'var(--dark-slate-gray)',
                label_icon_state: 'transparent',
                label_state: 'transparent',
                selected: 'var(--android-green)'
            },
            callbacks: {
                click: onClick
            }
        });
    }, []);

    return <div className={`${styles.container} ${className}`} {...props}>
        <div className={styles.map} id={styles.map}></div>
    </div>;
};

export default BrazilMap;