import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mayank Rajput</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an exploit developer</HighlightAlt> based in Gujarat,
        India.
      </p>
      <p>
        I am passionate about Exploit develpement and <br />
        Ethical Hacking. Also have a keen interest in <br />
        Badminton playing & poetry writing.
      </p>
      <p>
      I've been honored in the NASA Hall of Fame, Unilever Hall of Fame, and Lucid Motors Hall of Fame.</p>
    </AboutWrapper>
  );
};

export default About;
