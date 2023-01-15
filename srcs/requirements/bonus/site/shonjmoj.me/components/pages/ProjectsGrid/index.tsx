import Link from "next/link";
import ProjectCard, { Repos } from "../../common/ProjectCard";
import { motion } from "framer-motion";
const ProjectsGrid = ({ repos }: { repos: Repos[] }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 lg:py-4 mt-6 lg:mt-10">
        {repos.map((repo, i) => {
          if (
            repo.name === "Cpp-Modules" ||
            repo.name === "DevFinder-ts" ||
            repo.name === "shonjmoj.me" ||
            repo.name === "Philosophers" ||
            repo.name === "RickandMorty-Docs" ||
            repo.name === "Cub3d"
          )
            return (
              <ProjectCard
                id={repo.id}
                key={repo.id}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
                html_url={repo.html_url}
                delay={i * 0.1}
              />
            );
        })}
      </div>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 }}
        className="text-center sm:text-left mt-6 lg:mt-10 font-light"
      >
        You can find more project's here{" "}
        <Link
          href={"https://github.com/shonjmoj"}
          className="font-semibold hover:underline transition duration-200"
        >
          github/shonjmoj
        </Link>{" "}
        :)
      </motion.span>
    </div>
  );
};

export default ProjectsGrid;
