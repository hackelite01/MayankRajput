import {
  AffIntro,
  AffItem,
  AffList,
} from "../styles/Affiliations.styled";
import { Wrapper } from "../styles/Output.styled";

const Affiliations: React.FC = () => {
  return (
    <Wrapper data-testid="affiliations">
      <AffIntro>Positions of responsibility &amp; affiliations!</AffIntro>
      <AffList>
        {affiliations.map(({ role, meta }) => (
          <AffItem key={role}>
            <span className="role">{role}</span>
            {meta && <span className="meta"> — {meta}</span>}
          </AffItem>
        ))}
      </AffList>
    </Wrapper>
  );
};

const affiliations = [
  { role: "Member, GitHub Developer Program", meta: "" },
  { role: "Member, Indian Watchdogs", meta: "" },
  { role: "Member, EVLF Org.", meta: "" },
  {
    role: "Hacktoberfest Maintainer",
    meta: "DigitalOcean / GitHub, 2021 – Present",
  },
];

export default Affiliations;
