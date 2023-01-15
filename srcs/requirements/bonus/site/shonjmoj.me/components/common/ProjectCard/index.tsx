import Link from "next/link";
import { VscLinkExternal } from "react-icons/vsc";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiCoursera,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
  SiFramer,
} from "react-icons/si";

export interface Repos {
  name: string;
  id: number;
  description: string;
  html_url: string;
  topics: string[];
  delay?: number;
}

const ProjectCard = ({
  name,
  id,
  description,
  topics,
  html_url,
  delay,
}: Repos) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      className="border dark:border-slate-100 border-slate-900 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 rounded-lg p-4 lg:p-6 flex flex-col justify-between gap-4 lg:gap-8"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h2 className="font-bold text-xl xl:text-2xl">{name}</h2>
          <span className="text-xs xl:text-sm font-light leading-normal">
            {description}
          </span>
        </div>
        <Link shallow href={html_url}>
          <VscLinkExternal />
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        {topics.map((topic) => {
          switch (topic) {
            case "javascript":
              return (
                <Link
                  shallow
                  key={1}
                  href={
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  }
                >
                  {" "}
                  <SiJavascript />
                </Link>
              );
            case "c":
              return (
                <Link shallow key={2} href={"https://www.cprogramming.com/"}>
                  {" "}
                  <SiCoursera />
                </Link>
              );
            case "cpp":
              return (
                <Link shallow key={3} href={"https://www.w3schools.com/cpp/"}>
                  {" "}
                  <SiCplusplus />
                </Link>
              );
            case "typescript":
              return (
                <Link shallow key={4} href={"https://www.typescriptlang.org"}>
                  {" "}
                  <SiTypescript />
                </Link>
              );
            case "react":
              return (
                <Link shallow key={5} href={"https://reactjs.org/"}>
                  {" "}
                  <SiReact />
                </Link>
              );
            case "nextjs":
              return (
                <Link shallow key={6} href={"https://nextjs.org/"}>
                  {" "}
                  <SiNextdotjs />
                </Link>
              );
            case "tailwindcss":
              return (
                <Link shallow key={7} href={"https://tailwindcss.com/"}>
                  {" "}
                  <SiTailwindcss />
                </Link>
              );
            case "docker":
              return (
                <Link shallow key={7} href={"https://docs.docker.com/"}>
                  {" "}
                  <SiDocker />
                </Link>
              );
            case "framer-motion":
              return (
                <Link shallow key={7} href={"https://www.framer.com/motion/"}>
                  {" "}
                  <SiFramer />
                </Link>
              );
          }
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
