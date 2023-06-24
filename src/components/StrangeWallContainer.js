import ThrillerCardContainer from "./ThrillerCardContainer";
import styles from "./StrangeWallContainer.module.css";
const StrangeWallContainer = () => {
  return (
    <div className={styles.cardllist}>    
      <ThrillerCardContainer imageIds="/card-pic1@2x.png" />
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
