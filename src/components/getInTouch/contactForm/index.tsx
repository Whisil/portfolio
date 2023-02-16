import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './styles.module.scss';
import Snackbar from '../../snackbar';

const ContactForm = () => {
  const [modalType, setModalType] = useState<'Error' | 'OK' | ''>('');

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        formRef.current!,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY as string,
      )
      .then(() => {
        setModalType(() => 'OK');
        setTimeout(() => setModalType(() => ''), 5000);
        formRef.current!.reset();
      })
      .catch((err) => {
        console.log(err);
        setModalType(() => 'Error');
        setTimeout(() => setModalType(() => ''), 5000);
      });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formUpper}>
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            className={styles.input}
          />
          <input
            name="user_email"
            type="email"
            placeholder="E-mail"
            className={styles.input}
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
        />
        <button className={styles.submitBtn} type="submit">
          <span className={styles.submitBtnText}>Send</span>
          <img src="/images/icons/send.svg" width={32} height={32} alt="" />
        </button>
      </form>

      {modalType.length !== 0 && <Snackbar type={modalType} />}
    </>
  );
};

export default ContactForm;
