import { ProjectsGrid } from "../components";
import { Repos } from "../components/common/ProjectCard";

const projects = ({ repos }: { repos: Repos[] }) => {
  return <>{<ProjectsGrid repos={repos} />}</>;
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/shonjmoj/repos");
  const repos = await res.json();

  return {
    props: {
      repos: repos,
    },
  };
}

export default projects;
