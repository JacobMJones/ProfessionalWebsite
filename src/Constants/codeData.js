const components = {
  Projects:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js",

  ProjectCard:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/ProjectCard/index.js",
  WorkHistory:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/WorkHistory/index.js"
};

const { Projects, ProjectCard, WorkHistory } = components;
const ProjectsCode = [Projects, ProjectCard];
const WorkHistoryCode = [WorkHistory];
export default { ProjectsCode, WorkHistoryCode };
