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
    title: "Zonal Finalist, Eureka 2023-2024, E-Cell IIT Bombay"
  },
  {
    title: "E-Summit Finalist, E-Cell IIT Bombay (2023-2024 & 2024-2025)"
  },
  {
    title: "TryHackMe Top 3%"
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
    title: "OYO Hall of Fame"
  },
  {
    title: "Kroger Hall of Fame"
  },
  {
    title: "Dreamscape Hall of Fame"
  },
  {
    title: "Cengage Hall of Fame"
  },
  {
    title: "Genius Hall of Fame"
  },
  {
    title: "GeekForGeeks Top 1 Institute Level"
  }
];

export default Achievements;
