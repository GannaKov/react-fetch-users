import homeBG from "../../assets/images/homepage-photo.jpg";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.pageWrp}>
      <img src={homeBG} alt="Home page background" />
    </div>
  );
};

export default HomePage;
