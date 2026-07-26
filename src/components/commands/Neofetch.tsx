import { Info, Logo, NeofetchWrapper } from "../styles/Neofetch.styled";

const Neofetch: React.FC = () => {
  return (
    <NeofetchWrapper data-testid="neofetch">
      <Logo>
        {`   ███╗   ███╗██████╗
   ████╗ ████║██╔══██╗
   ██╔████╔██║██████╔╝
   ██║╚██╔╝██║██╔══██╗
   ██║ ╚═╝ ██║██║  ██║
   ╚═╝     ╚═╝╚═╝  ╚═╝`}
      </Logo>
      <Info>
        <div className="head">visitor@mayank</div>
        <div className="rule">---------------</div>
        {infoLines.map(({ key, val }) => (
          <div key={key}>
            <span className="key">{key}:</span>{" "}
            <span className="val">{val}</span>
          </div>
        ))}
      </Info>
    </NeofetchWrapper>
  );
};

const infoLines = [
  { key: "Name", val: "Mayank Rajput" },
  { key: "Role", val: "SOC Engineer • Exploit Dev • Ethical Hacker" },
  { key: "Company", val: "Forensic CyberTech Pvt. Ltd." },
  { key: "Location", val: "Gujarat, India" },
  { key: "OS", val: "Cybersecurity" },
  { key: "Shell", val: "mayank-terminal v1.4" },
  { key: "Languages", val: "Python, JS, TS, Bash, Rust, PowerShell" },
  { key: "Focus", val: "SOC • SIEM • Detection Eng • VAPT" },
  { key: "Uptime", val: "hacking since 2021" },
];

export default Neofetch;
