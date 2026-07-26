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
        I'm a <HighlightAlt>SOC Engineer</HighlightAlt>,{" "}
        <HighlightAlt>exploit developer</HighlightAlt>, and{" "}
        <HighlightAlt>ethical hacker</HighlightAlt> based in Gujarat, India.
      </p>
      <p>
        I build multi-tenant SOC platforms, detection frameworks, and <br />
        scalable security data pipelines. I'm passionate about exploit <br />
        development, ethical hacking, detection engineering, and <br />
        threat detection &amp; incident response. I also enjoy <br />
        badminton and poetry writing.
      </p>
      <p>
        I've been honored in the NASA, Unilever, Lucid Motors, OYO, Kroger,
        Dreamscape, Cengage, and Genius Halls of Fame.
      </p>
    </AboutWrapper>
  );
};

export default About;
