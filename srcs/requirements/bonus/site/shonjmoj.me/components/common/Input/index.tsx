import { CgDanger } from "react-icons/cg";
import { motion } from "framer-motion";
import React from "react";

export interface InputProps {
  name: string;
  value?: string;
  label: string;
  HTMLType: string;
  type: string;
  className?: string;
  error?: boolean;
  inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textAreaOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({
  name,
  value,
  HTMLType,
  label,
  className,
  error,
  type,
  inputOnChange,
  textAreaOnChange,
}: InputProps) => {
  return (
    <div
      className={`flex flex-col gap-2 w-full ${
        HTMLType === "textarea" && "md:col-span-2"
      }`}
    >
      {HTMLType === "text" && (
        <>
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            htmlFor=""
          >
            {label}
          </motion.label>
          <motion.input
            name={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            type={type}
            className={`bg-transparent border ${
              error
                ? "border-red-600"
                : "border-slate-900 dark:border-slate-100"
            } rounded-md py-2 px-4 xl:py-3 ${className} transition-colors duration-500 shadow-sm shadow-xs dark:shadow-slate-100/50 hover:shadow-sm`}
            value={value}
            onChange={inputOnChange}
          />
          {error && (
            <span className="flex gap-2 items-center ml-1 text-sm xl:text-base text-red-600">
              <CgDanger size={18} />
              {`Invalid ${type}`}
            </span>
          )}
        </>
      )}
      {HTMLType === "textarea" && (
        <>
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            htmlFor=""
          >
            {label}
          </motion.label>
          <motion.textarea
            name={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className={`bg-transparent border ${
              error
                ? "border-red-600"
                : "border-slate-900 dark:border-slate-100"
            } rounded-md py-2 px-4 xl:py-3 ${className} transition-colors duration-500 shadow-xs dark:shadow-slate-100/50 hover:shadow-md`}
            value={value}
            onChange={textAreaOnChange}
          />
          {error && (
            <span className="flex gap-2 items-center ml-1 text-sm xl:text-base text-red-600">
              <CgDanger size={18} />
              {`Invalid ${type}`}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Input;
