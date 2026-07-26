import {
  CertIntro,
  CertItem,
  CertList,
} from "../styles/Certifications.styled";
import { Wrapper } from "../styles/Output.styled";

const Certifications: React.FC = () => {
  return (
    <Wrapper data-testid="certifications">
      <CertIntro>Here are my certifications!</CertIntro>
      <CertList>
        {certs.map(({ name, issuer }) => (
          <CertItem key={name}>
            <span className="name">{name}</span>
            {issuer && <span className="issuer"> — {issuer}</span>}
          </CertItem>
        ))}
      </CertList>
    </Wrapper>
  );
};

const certs = [
  { name: "Certified AppSec Practitioner (CAP)", issuer: "The SecOps Group" },
  {
    name: "Certified Red Team Operations Management (CRTOM)",
    issuer: "",
  },
  { name: "Certified LLM Security Professional (CLLMSP)", issuer: "" },
  {
    name: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "",
  },
  { name: "IBM Cyber Security", issuer: "IBM" },
  { name: "TCS ESG Virtual Experience Program", issuer: "TCS" },
];

export default Certifications;
