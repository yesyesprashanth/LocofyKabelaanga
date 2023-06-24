import ThrillerCardContainer from "./ThrillerCardContainer";
import styles from "./StrangeWallContainer.module.css";
const StrangeWallContainer = () => {
  return (
    <div className={styles.cardllist}>
      <section className={styles.card} id="card">
        <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
        <div className={styles.cardName}>
          <div className={styles.genre}>
            <b className={styles.thriller}>THRILLER</b>
          </div>
          <div className={styles.title}>
            <b className={styles.thriller}>Strange Wall</b>
          </div>
        </div>
      </section>
      <ThrillerCardContainer imageIds="/card-pic1@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic1@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic1@2x.png" />
      <ThrillerCardContainer imageIds="/card-pic@2x.png" />
    </div>
  );
};

export default StrangeWallContainer;
