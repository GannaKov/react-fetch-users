import { useState } from "react";
import Form from "../../components/Form/Form";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const [form, setForm] = useState(null);

  // function handleSubmit(fromForm) {
  //   setForm(fromForm);
  //   console.log(fromForm);
  // }

  return (
    <div className={styles.pageWrp}>
      <Form setForm={setForm} />
      {form && (
        <>
          <p>Result</p>
          <p>{form.name}</p>
          <p>{form.email}</p>
          <p>{form.message}</p>
        </>
      )}
    </div>
  );
};

export default ContactPage;
