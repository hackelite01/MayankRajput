import { ExpIntro, ExpList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

/* ===== career start: IBM internship, Aug 2023 (month is 0-indexed) ===== */
const CAREER_START = new Date(2023, 7, 1);

const getTotalExperience = (): string => {
  const now = new Date();
  const months = Math.max(
    0,
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
      (now.getMonth() - CAREER_START.getMonth())
  );
  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (years === 0) return `${remMonths} mo`;
  if (remMonths === 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${years} yr${years > 1 ? "s" : ""} ${remMonths} mo`;
};

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExpIntro>
        Here is my professional experience!{" "}
        <span className="total">({getTotalExperience()} total)</span>
      </ExpIntro>
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
    title: "SOC Engineer, Forensic CyberTech Pvt. Ltd.",
    period: "Jan 2025 to Present",
    desc: "Developed an end-to-end multi-tenant SOC platform with scalable security data pipelines and detection frameworks; led 9 production-grade cybersecurity projects focused on threat detection and incident response. Managed cross-functional teams and client onboarding, leading solution architecture, project delivery, and technology evaluations to enhance SOC efficiency through standardized processes and automation."
  },
  {
    title: "Sub-Coordinator & Ex. Tech Head, E-Cell SIT",
    period: "Sep 2023 to March 2025 (Tech Head until July 2024)",
    desc: "Led operations and technology teams, driving entrepreneurship and innovation initiatives across the organization. Developed and implemented technology solutions to streamline operations, optimize digital platforms, fulfill organizational technology needs, and support technology-driven events."
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
