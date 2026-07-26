import About from "./commands/About";
import Achievements from "./commands/Achievements";
import Affiliations from "./commands/Affiliations";
import Certifications from "./commands/Certifications";
import Clear from "./commands/Clear";
import Cmatrix from "./commands/Cmatrix";
import Contact from "./commands/Contact";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Experience from "./commands/Experience";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Industry from "./commands/Industry";
import Neofetch from "./commands/Neofetch";
import Projects from "./commands/Projects";
import Skills from "./commands/Skills";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = [
    "projects",
    "socials",
    "themes",
    "echo",
    "sudo",
    "ls",
    "cd",
    "cat",
    "rm",
  ];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          achievements: <Achievements />,
          affiliations: <Affiliations />,
          certs: <Certifications />,
          clear: <Clear />,
          cmatrix: <Cmatrix />,
          contact: <Contact />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          experience: <Experience />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          industry: <Industry />,
          neofetch: <Neofetch />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/MayankRajput</GeneralOutput>,
          skills: <Skills />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
          sudo: (
            <GeneralOutput>
              Nice try! 🔒 visitor is not in the sudoers file. This incident
              will be reported.
            </GeneralOutput>
          ),
          ls: (
            <GeneralOutput>
              about achievements affiliations certs contact education experience
              industry projects skills socials
            </GeneralOutput>
          ),
          cd: (
            <GeneralOutput>
              You're already home 🏠 — try `help` to see where you can go.
            </GeneralOutput>
          ),
          cat: <GeneralOutput>🐱 meow~ nothing to cat here.</GeneralOutput>,
          rm: (
            <GeneralOutput>
              rm: cannot remove '/': Operation not permitted 🚫 (good try
              though).
            </GeneralOutput>
          ),
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
