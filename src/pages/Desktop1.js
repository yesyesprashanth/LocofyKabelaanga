import Header from "../components/Header";
import StrangeWallContainer from "../components/StrangeWallContainer";
import Footer from "../components/Footer";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <Header />
      <h2 className={styles.body}>
        <div className={styles.heading}>
          <div className={styles.kabelenga}>Kabelenga</div>
        </div>
      </h2>
      <h3 className={styles.heading2}>
        <b className={styles.tellingStoriesWithout}>
          Telling Stories Without End
        </b>
      </h3>
      <StrangeWallContainer />
      <Footer />
      <img className={styles.menuIcon} alt="" src="/menu1@2x.png" />
    </div>
  );
};

export default Desktop1;
