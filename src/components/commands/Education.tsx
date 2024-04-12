import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.E. - Computer Engineering",
    desc: "Saffrony Institute of Technology | 2021 ~ 2025",
  },
  {
    title: "HSC",
    desc: "Shri S.V. Shah Vidhya Vihar | 2020",
  },

];

export default Education;
