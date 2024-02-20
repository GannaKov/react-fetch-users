import notFound from "../../assets/images/no_found.jpg";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.pageWrp}>
      <img src={notFound} alt="Page not found" className={styles.notFoundImg} />
    </div>
  );
};

export default NotFound;
