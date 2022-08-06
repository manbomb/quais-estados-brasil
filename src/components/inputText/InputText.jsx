import { useEffect, useRef } from 'react';
import styles from './InputText.module.css';

const InputText = ({ value, onChange, className = '', onEnter, error = false, focus = false, ...props }) => {
    const inputRef = useRef(null);
    
    const onKeyDown = (ev) => {
        if (ev.code === 'Enter') onEnter(ev);
    };

    useEffect(() => {
        if (!focus || !inputRef) return;
        inputRef.current.focus();
    }, [focus])

    return <div className={`${styles.container} ${className}`}>
        <input
            ref={inputRef}
            type={'text'}
            className={`${error ? styles.error : ''}`}
            onChange={ev => onChange(ev.target.value)}
            value={value}
            onKeyDown={onKeyDown}
            {...props}
        />
    </div>;
};

export default InputText;