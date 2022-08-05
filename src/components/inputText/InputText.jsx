import styles from './InputText.module.css';

const InputText = ({ value, onChange, className = '', onEnter, error = false, ...props }) => {
    const onKeyDown = (ev) => {
        if (ev.code === 'Enter') onEnter(ev);
    };

    return <div className={`${styles.container} ${className}`} {...props}>
        <input type={'text'} className={`${error ? styles.error : ''}`} onChange={ev => onChange(ev.target.value)} value={value} onKeyDown={onKeyDown} />
    </div>;
};

export default InputText;