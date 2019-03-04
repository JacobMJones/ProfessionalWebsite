

const components = {
  Projects:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/Projects/index.js",
  Cards:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/Cards/index.js",
  WorkHistory:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/WorkHistory/index.js",
  Notes:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/Notes/index.js",
Recent: "https://github.com/JacobMJones/ProfessionalWebsite/blob/master/src/Pages/Recent/index.js",
  CheckBox:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/Checkbox/index.js",
  Collapsible:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/Collapsible/index.js",
  CollapsibleCard:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/CollapsibleCard/index.js",
  TitleNavBar:
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Components/TitleNavBar/index.js",
  GetCode:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Functions/getCode.js",
  PrismCode:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/PrismCode/index.js",
  Studies:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/Studies/index.js",
  FormalEducation:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/FormalEducation/index.js",
  NoteBasedPage:
    "https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Components/NoteBasedPage/index.js",
Tutorials:"https://raw.githubusercontent.com/JacobMJones/ProfessionalWebsite/master/src/Pages/Tutorials/index.js",
};

const {
  Projects,
  Cards,
  WorkHistory,
  TitleNavBar,
  CheckBox,
  Collapsible,
  CollapsibleCard,
  GetCode,
  PrismCode,
  Studies,
  FormalEducation,
  Notes,
  NoteBasedPage,
  Tutorials,
  Recent
} = components;

const ProjectsCode = [Projects, NoteBasedPage, TitleNavBar, PrismCode];
const RecentCode = [Recent, NoteBasedPage, TitleNavBar, PrismCode]
const StudiesCode = [Studies, GetCode, TitleNavBar, PrismCode];
const NotesCode = [Notes, GetCode, TitleNavBar, PrismCode];
const TutorialsCode = [Tutorials, NoteBasedPage]
const FormalEducationCode = [
  FormalEducation,
  NoteBasedPage,
  TitleNavBar,
  PrismCode
];
const WorkHistoryCode = [
  WorkHistory,
  GetCode,
  TitleNavBar,
  CheckBox,
  CollapsibleCard,
  Collapsible
];
export default {
  ProjectsCode,
  WorkHistoryCode,
  StudiesCode,
  FormalEducationCode,
  NotesCode,
  TutorialsCode,
  RecentCode
};
