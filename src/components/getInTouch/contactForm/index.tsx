import styles from './styles.module.scss';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formUpper}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className={styles.input}
        />
        <input type="email" placeholder="E-mail" className={styles.input} />
      </div>

      <textarea
        name=""
        id=""
        placeholder="Message"
        className={styles.textarea}
      />
    </form>
  );
};

export default ContactForm;
