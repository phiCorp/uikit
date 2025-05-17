import styles from './FullPageLoader.module.css';

const FullPageLoader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner} />
        </div>
    );
};

export default FullPageLoader;
