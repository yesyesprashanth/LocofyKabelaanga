import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerAddress}>
        <div className={styles.address}>
          <b className={styles.kabelengaInc2nd}>
            Kabelenga Inc. 2nd Floor, New York, NY 10016
          </b>
        </div>
        <div className={styles.socialPages}>
          <div className={styles.facebook}>
            <div className={styles.facebookChild} />
            <b className={styles.f}>f</b>
          </div>
          <div className={styles.insta}>
            <div className={styles.facebookChild} />
            <img
              className={styles.iconInstagram}
              alt=""
              src="/-icon-instagram.svg"
            />
          </div>
          <div className={styles.twitter}>
            <div className={styles.facebookChild} />
            <img
              className={styles.iconTwitter}
              alt=""
              src="/-icon-twitter.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.companyMenu}>
          <div className={styles.company}>
            <b className={styles.news}>Company</b>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>
              <span>About</span>
              <b>{` `}</b>
              <span>Us</span>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>News</div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>Career</div>
          </div>
          <div className={styles.aboutUs4}>
            <div className={styles.news}>
              <p className={styles.howWeWork}>How we work</p>
            </div>
          </div>
        </div>
        <div className={styles.companyMenu}>
          <div className={styles.company}>
            <b className={styles.news}>Support</b>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>FAQ</div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>US Office</div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.asiaOfficeWrapper}>
              <div className={styles.news}>Asia Office</div>
            </div>
          </div>
          <div className={styles.aboutUs8}>
            <div className={styles.news}>Help Center</div>
          </div>
        </div>
        <div className={styles.more}>
          <div className={styles.company3}>
            <b className={styles.news}>More</b>
          </div>
          <div className={styles.aboutUs9}>
            <div className={styles.kabelengaInc2nd}>Become a Partner</div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>Partner Support</div>
          </div>
          <div className={styles.aboutUs11}>
            <div className={styles.kabelengaInc2nd}>Driver Rquirement</div>
          </div>
        </div>
        <div className={styles.companyMenu}>
          <div className={styles.company}>
            <b className={styles.news}>App</b>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>Report Bug</div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.news}>App Helpdesk</div>
          </div>
          <div className={styles.aboutUs11}>
            <div className={styles.kabelengaInc2nd}>Mobile app links</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
