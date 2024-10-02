import { AchIntro, AchList, AchItem } from "../styles/Achievements.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievements: React.FC = () => {
  return (
    <Wrapper data-testid="achievements">
      <AchIntro>Here are my achievements!</AchIntro>
      <AchList>
        {achBg.map(({ title }) => (
          <AchItem key={title}>
            <div className="title">{title}</div>
          </AchItem>
        ))}
      </AchList>
    </Wrapper>
  );
};

const achBg = [
  {
    title: "The Maverick Effect AI Challenge'24 Finalists (Top 19 out of 170 teams)"
  },
  {
    title: "Zonal Finalist, Eureka 2023-2024, E-Cell IITB"
  },
  {
    title: "NASA Hall of Fame"
  },
  {
    title: "Hindustan Unilever Hall of Fame"
  },
  {
    title: "Lucid Motors Hall of Fame"
  },
  {
    title: "GeekForGeeks Top 1 Inst. Level"
  },
  {
    title: "TryHackMe top 6%"
  }
];

export default Achievements;
