import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const EmailValidation = ({ isValid }: { isValid: boolean | null }) => {
  return (
    <motion.div className="flex flex-col items-center gap-6 mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-100 dark:text-slate-900 bg-slate-900 dark:bg-slate-100 p-6 xl:p-8 rounded-full shadow-sm shadow-slate-900/50 dark:shadow-slate-100/50"
      >
        {isValid ? <MdDone size={30} /> : <RxCross2 size={30} />}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold xl:text-4xl tracking-wide"
      >
        {isValid ? "Email sent successfully !" : "Oups !"}
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="font-light text-lg xl:text-xl"
      >
        {isValid ? "It's time to go back " : "Something went wrong, "}
        <Link href={"/"} className="font-normal">
          {isValid ? "home" : "try again"}
        </Link>
      </motion.span>
    </motion.div>
  );
};

export default EmailValidation;
