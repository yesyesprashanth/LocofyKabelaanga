import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.navbar}>
        <div className={styles.brandname}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <b className={styles.kabelenga}>Kabelenga</b>
        </div>
        <div className={styles.menu}>
          <div className={styles.home}>
            <img className={styles.homeIcon} alt="" src="/home.svg" />
            <div className={styles.news}>Home</div>
          </div>
          <div className={styles.post}>
            <img className={styles.homeIcon} alt="" src="/penciloutline.svg" />
            <div className={styles.news}>Post</div>
          </div>
          <div className={styles.notification}>
            <img className={styles.homeIcon} alt="" src="/belloutline.svg" />
            <div className={styles.news}>Notification</div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.heading}>
          <div className={styles.news}>Kabelenga</div>
        </div>
      </div>
      <div className={styles.heading2}>
        <b className={styles.kabelenga}>Telling Stories Without End</b>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerAddress}>
          <div className={styles.address}>
            <b className={styles.kabelenga}>
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
              <div className={styles.kabelenga}>Become a Partner</div>
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.news}>Partner Support</div>
            </div>
            <div className={styles.aboutUs11}>
              <div className={styles.kabelenga}>Driver Rquirement</div>
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
              <div className={styles.kabelenga}>Mobile app links</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardllist}>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic1@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic1@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic1@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.cardPicIcon} alt="" src="/card-pic@2x.png" />
          <div className={styles.cardName}>
            <div className={styles.genre}>
              <b className={styles.news}>THRILLER</b>
            </div>
            <div className={styles.title}>
              <b className={styles.news}>Strange Wall</b>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.menuIcon} alt="" src="/menu@2x.png" />
    </div>
  );
};

export default Desktop1;
