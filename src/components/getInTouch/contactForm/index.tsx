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
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          className={styles.input}
        />
      </div>

      <textarea
        name=""
        id=""
        placeholder="Message"
        className={styles.textarea}
      />
      <button className={styles.submitBtn}>
        <span className={styles.submitBtnText}>Send</span>
        <img src="/images/icons/send.svg" width={32} height={32} alt="" />
      </button>
    </form>
  );
};

export default ContactForm;
