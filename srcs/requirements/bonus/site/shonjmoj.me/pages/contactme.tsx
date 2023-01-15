import React, { useState } from "react";
import { Button, EmailValidation, Input } from "../components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const contact = () => {
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setsubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value) &&
      e.target.value !== ""
    )
      setEmailError(true);
    else {
      setEmailError(false);
      setEmail(e.target.value);
    }
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  return (
    <div className="container flex flex-col items-center gap-6 lg:gap-12 mt-16 lg:mt-28">
      {isValid === null ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-bold md:text-3xl lg:text-4xl"
          >
            Contact Me!
          </motion.h1>
          <form
            className="w-full lg:w-[60%] xl:w-[50%] grid md:grid-cols-2 gap-3 lg:gap-4"
            onSubmit={(e: any) => {
              e.preventDefault();
              if (!email) {
                setEmailError(true);
                if (!subject) setsubjectError(true);
                if (!message) setMessageError(true);
                setTimeout(() => {
                  setEmailError(false);
                  setsubjectError(false);
                  setMessageError(false);
                }, 2000);
                return;
              }
              emailjs
                .sendForm(
                  process.env.NEXT_PUBLIC_SERVICE_ID!,
                  process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                  e.target,
                  process.env.NEXT_PUBLIC_USER_ID
                )
                .then(
                  (res) => {
                    if (res.text === "OK") setIsValid(true);
                    else if (res.text === "KO") setIsValid(false);
                  },
                  (err) => {
                    console.log(err.text);
                  }
                );
              e.target.reset();
            }}
          >
            <Input
              name="email"
              label="Email"
              HTMLType="text"
              type="email"
              inputOnChange={emailChangeHandler}
              error={emailError}
              value={email}
            />
            <Input
              name="subject"
              label="Subject"
              HTMLType="text"
              type="subject"
              inputOnChange={subjectChangeHandler}
              error={subjectError}
              value={subject}
            />
            <Input
              name="message"
              label="Message"
              HTMLType="textarea"
              type="text"
              textAreaOnChange={textAreaChangeHandler}
              error={messageError}
              value={message}
            />
            <Button
              text="Submit"
              type="submit"
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            />
          </form>
        </>
      ) : (
        <EmailValidation isValid={isValid} />
      )}
    </div>
  );
};

export default contact;
