import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            layout
            key={"moon"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -10, opacity: 0 }}
            whileTap={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          >
            {" "}
            <FiMoon size={20} />{" "}
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 180 }}
            exit={{ y: 10, opacity: 0 }}
            whileTap={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
            key="sun"
          >
            {" "}
            <BsSun size={20} />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitch;
