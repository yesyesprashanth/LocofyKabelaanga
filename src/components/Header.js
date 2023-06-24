import styles from "./Header.module.css";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandname}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <b className={styles.kabelenga}>Kabelenga</b>
      </div>
      <div className={styles.menu}>
        <div className={styles.home}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
          <div className={styles.home1}>Home</div>
        </div>
        <div className={styles.post}>
          <img className={styles.homeIcon} alt="" src="/penciloutline.svg" />
          <div className={styles.home1}>Post</div>
        </div>
        <div className={styles.notification}>
          <img className={styles.homeIcon} alt="" src="/belloutline.svg" />
          <div className={styles.home1}>Notification</div>
        </div>
      </div>
      <button className={styles.menu1} />
    </nav>
  );
};

export default Header;
