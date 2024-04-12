import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "CyberGenie",
    desc: "AI assistant that utilizes GPT language models to interpret and generate cybersecurity payloads 🪄",
    url: "https://cybergenie.vercel.app/",
  },
  {
    id: 2,
    title: "XSSProbe",
    desc: "A powerful XSS scanner made in python.",
    url: "https://github.com/hackelite01/xssprobe",
  },
  {
    id: 3,
    title: "ShieldSurf",
    desc: "A phishing domain detection tool that also allows you to safely view the website without actually visiting it. Built using Python. With ShieldSurf, you can quickly identify suspicious websites and protect yourself from phishing attacks.",
    url: "https://shieldsurf.vercel.app/",
  },
  {
    id: 4,
    title: "MailGuard",
    desc: "MailGuard is a python based forensic tool which reads through the email from the email file and extracts crucial information to identify if the email is legitimate or not.",
    url: "https://github.com/hackelite01/mailguard",
  },{
    id: 5,
    title: "KnightSpy",
    desc: "KnightSpy: Python tool for efficient information gathering, CMS detection.",
    url: "https://github.com/hackelite01/KnightSpy",
  },{
    id: 6,
    title: "Github ReadMe Maker",
    desc: "Streamline README creation with this user-friendly web tool. Choose from templates, add badges, social links, and more. Live preview ensures a polished result. Elevate your GitHub project presentation effortlessly. 🌟",
    url: "https://github-readme-maker.vercel.app/",
  },{
    id: 7,
    title: "CodeXPlain",
    desc: "Understanding code can be hard - let CodeXplain help you with that line by line.",
    url: "https://codexplain.vercel.app/",
  },{
    id: 8,
    title: "SnapCode",
    desc: "Create and share code snippets as images, with customizable options.",
    url: "https://snapcode-hackelite01.vercel.app/",
  },
];

export default Projects;
