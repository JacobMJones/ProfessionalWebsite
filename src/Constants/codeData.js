const components = {
  Projects:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js",

  ProjectCard:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/ProjectCard/index.js",
  WorkHistory:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/WorkHistory/index.js",

  CheckBox:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/Checkbox/index.js",
  Collapsible:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/Collapsible/index.js",
  CollapsibleCard:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/CollapsibleCard/index.js",
  TitleNavBar:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/TitleNavBar/index.js",
  GetCode:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Functions/getCode.js",
  PrismCode:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/PrismCode/index.js",
  Studies:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Studies/index.js"
};

const {
  Projects,
  ProjectCard,
  WorkHistory,
  TitleNavBar,
  CheckBox,
  Collapsible,
  CollapsibleCard,
  GetCode,
  PrismCode,
  Studies
} = components;

const ProjectsCode = [Projects, ProjectCard, TitleNavBar, PrismCode];
const StudiesCode = [Studies, GetCode, TitleNavBar, PrismCode];
const WorkHistoryCode = [
  WorkHistory,
  GetCode,
  TitleNavBar,
  CheckBox,
  CollapsibleCard,
  Collapsible
];
export default { ProjectsCode, WorkHistoryCode, StudiesCode };
