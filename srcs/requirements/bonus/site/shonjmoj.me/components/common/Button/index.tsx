import { motion } from "framer-motion";

const Button = ({
  type,
  text,
  className,
  initial,
  animate,
  transition,
}: {
  text: string;
  type: "submit" | "reset" | "button";
  className?: string;
  initial?: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  animate?: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  transition?: {
    delay: number;
  };
}) => {
  return (
    <motion.button
      type={type}
      initial={initial}
      animate={animate}
      transition={transition}
      className={`text-xs p-2.5 md:text-sm lg:py-2 lg:px-2.5 2xl:text-base 2xl:py-2 2xl:px-4 border rounded-md border-slate-900 bg-slate-900 text-slate-100 shadow-slate-900/50 shadow-lg
        hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-100 dark:text-slate-900 font-semibold
        dark:hover:border-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-100 transition-all ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
