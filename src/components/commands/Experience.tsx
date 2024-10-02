import { ExpIntro, ExpList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExpIntro>Here is my professional experience!</ExpIntro>
      {expBg.map(({ title, period, desc }) => (
        <ExpList key={title}>
          <div className="title">{title}</div>
          <div className="period">{period}</div>
          <div className="desc">{desc}</div>
        </ExpList>
      ))}
    </Wrapper>
  );
};

const expBg = [
  {
    title: "Sub-Coordinator & Ex. Tech Head, E-Cell SIT",
    period: "Sep 2023 to Present (Tech Head until July 2024)",
    desc: "Leading operations and tech teams, driving strategies for entrepreneurship and innovation. Led tech solutions to streamline operations, fulfilled cell-wide tech requirements, optimized digital platforms, and organized tech-driven events."
  },
  {
    title: "SURE Trust Training + Internship",
    period: "April 2024 to September 2024 (6 months)",
    desc: "Acquired skills in cybersecurity, including vulnerability assessments, penetration testing, and secure coding. Gained practical experience in network security, cryptography, CTF, and incident response."
  },
  {
    title: "Infolabz Pvt Ltd Training + Internship",
    period: "June 2024 to July 2024 (15 days)",
    desc: "Enhanced Django and REST API skills by creating MOVIEFLIX and CulturalQuest projects. Developed Knowledge Base and Creativity modules, collaborating effectively to tackle real-world challenges."
  },
  {
    title: "EY GDS Internship",
    period: "Feb 2024 to April 2024 (3 months)",
    desc: "Applied Design Thinking to solve real-world problems and collaborated with the team to advance project goals. Focused on Flask and Django, developed projects, and resolved issues in external software solutions."
  },
  {
    title: "IBM Internship",
    period: "Aug 2023 to Oct 2023 (3 months)",
    desc: "Mastered AI principles through hands-on projects with IBM in remote teams. Acquired practical industry insights and developed strong problem-solving skills."
  }
];

export default Experience;
