import Link from "next/link";
import { TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";
import ThemeSwitch from "../../../Theme";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full relative top-0 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="text-3xl 2xl:text-4xl font-bold"
      >
        Shonjmoj
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="lg:w-[50%] xl:text-lg flex justify-evenly items-center"
      >
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link className="lg:block hidden" href={"/"}>
            Whoami
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link className="lg:block hidden" href={"/projects"}>
            Projects
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link className="lg:block hidden" href={"/contactme"}>
            Contact Me
          </Link>
        </motion.div>
        <ThemeSwitch />
        <div className="opacity-60 lg:block hidden h-5 border rounded-full dark:border-slate-300 border-slate-900"></div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className="hidden lg:block"
            href={"https://twitter.com/shonjmoj"}
          >
            <TbBrandTwitter size={23} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className="hidden lg:block"
            href={"https://www.linkedin.com/in/mehdi-ounejjar-b9974221a/"}
          >
            <TbBrandLinkedin size={23} />
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
