import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styles from './styles.module.scss';
import Snackbar from '../../snackbar';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

const ContactForm = () => {
  const [modalType, setModalType] = useState<'Error' | 'OK' | ''>('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitMain = (data: any, e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        // process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        'f',
        'ff',
        formRef.current!,
        'sss',
        // process.env.REACT_APP_EMAIL_PUBLIC_KEY as string,
      )
      .then(() => {
        setModalType(() => 'OK');
        setTimeout(() => setModalType(() => ''), 4900);
        formRef.current!.reset();
      })
      .catch((err) => {
        console.log(err);
        setModalType(() => 'Error');
        setTimeout(() => setModalType(() => ''), 4900);
      });
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitMain)}
        ref={formRef}
      >
        <div className={styles.formUpper}>
          <input
            {...register('user_name', { required: true })}
            type="text"
            placeholder="Name"
            className={clsx(
              styles.input,
              errors.user_name && styles.inputError,
            )}
          />
          <input
            {...register('user_email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            type="email"
            placeholder="E-mail"
            className={clsx(
              styles.input,
              errors.user_email && styles.inputError,
            )}
          />
        </div>

        <textarea
          {...register('message', { required: true })}
          placeholder="Message"
          className={clsx(styles.textarea, errors.message && styles.inputError)}
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
