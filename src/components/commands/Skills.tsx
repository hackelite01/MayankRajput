import {
  SkillGroup,
  SkillsIntro,
  SkillTag,
  SkillTags,
} from "../styles/Skills.styled";
import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <SkillsIntro>Here are the skills I work with!</SkillsIntro>
      {skillGroups.map(({ category, items }) => (
        <SkillGroup key={category}>
          <div className="category">{category}</div>
          <SkillTags>
            {items.map(item => (
              <SkillTag key={item}>{item}</SkillTag>
            ))}
          </SkillTags>
        </SkillGroup>
      ))}
    </Wrapper>
  );
};

const skillGroups = [
  {
    category: "Security Operations",
    items: [
      "Security Operations Center (SOC)",
      "SIEM (Wazuh, OpenSearch, Splunk)",
      "Threat Detection & Incident Response",
      "Detection Engineering",
      "Log Analysis",
      "MITRE ATT&CK",
    ],
  },
  {
    category: "Offensive Security",
    items: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Ethical Hacking",
      "Exploit Development",
      "Bug Hunting",
      "Open-Source Intelligence (OSINT)",
    ],
  },
  {
    category: "Defense & Analysis",
    items: ["Network Security", "Malware Analysis", "Secure Coding"],
  },
  {
    category: "Programming Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Bash/Shell",
      "Rust",
      "PowerShell",
    ],
  },
];

export default Skills;
