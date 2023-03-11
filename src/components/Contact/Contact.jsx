import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import toast from "react-hot-toast";
import classes from "./Contact.module.scss";

import { MdOutlineWavingHand } from "react-icons/md";

const initialValues = {
  userName: "",
  enteredEmail: "",
  subject: "",
  message: "",
};

// validation
const validationSchema = Yup.object({
  userName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Must be 2 characters and above")
    .matches("^[a-zA-Z '.-]*$", "Must be only characters")
    .required("Required"),
  enteredEmail: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  subject: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const onSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_qhz43pe", "template_lwmwn0k", values, "WkRgcFnSFqgRa5i1W")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          toast("Your Mail Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    resetForm();
  };
  return (
    <section
      id="contact"
      className={classes['contact-section']}
    >
      <div className={classes['contact-header']}>
        <h2 className={classes['contact-header-h2']}>
          Get In Touch
        </h2>
        <div className={classes['contact-left']}>
          <h3 className={classes['contact-left-h3']}>Let's Talk</h3>
          <MdOutlineWavingHand className={classes['contact-left-icon']}/>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="contact_form">
              <div className={classes['contact-name-email-container']}>
                <div className={classes['contact-form-input']}>
                  <Field
                    type="text"
                    name="userName"
                    className={classes['input-field']}
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="userName">
                    {(errorMsg) => (
                      <p className={classes['contact-error-message']}>{errorMsg}</p>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes['contact-form-input']}>
                  <Field
                    type="email"
                    name="enteredEmail"
                    className={classes['input-field']}
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="enteredEmail">
                    {(errorMsg) => (
                      <p className={classes['contact-error-message']}>{errorMsg}</p>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className={classes['contact-form-input']}>
                <Field
                  type="text"
                  className={classes['input-field']}
                  name="subject"
                  placeholder="Enter your subject"
                />
                <ErrorMessage name="subject">
                  {(errorMsg) => (
                    <p className={classes['contact-error-message']}>{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className={classes['contact-form-text-area']}>
                <Field
                  as="textarea"
                  cols="30"
                  row="10"
                  className={classes['input-field']}
                  placeholder="Write your message"
                  name="message"
                />
                <ErrorMessage name="message">
                  {(errorMsg) => (
                    <p className={classes['contact-error-message']}>{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
              <div className={classes['contact-form-input']}>
                <button
                  type="submit"
                  className={`${classes['contact-submit-button']} ${classes.btn}`}
                  disabled={
                    !formik.isValid || formik.isSubmitting || !formik.dirty
                  }
                >
                  Send Message
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Contact;
