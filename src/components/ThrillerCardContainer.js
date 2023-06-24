import styles from "./ThrillerCardContainer.module.css";
const ThrillerCardContainer = ({ imageIds }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardPicIcon} alt="" src={imageIds} />
      <div className={styles.cardName}>
        <div className={styles.genre}>
          <b className={styles.thriller}>THRILLER</b>
        </div>
        <div className={styles.title}>
          <b className={styles.thriller}>Strange Wall</b>
        </div>
      </div>
    </div>
  );
};

export default ThrillerCardContainer;
