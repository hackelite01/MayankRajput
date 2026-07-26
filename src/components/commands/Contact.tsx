import {
  ContactHint,
  ContactLink,
  ContactRow,
  ContactWrapper,
} from "../styles/Contact.styled";

const Contact: React.FC = () => {
  return (
    <ContactWrapper data-testid="contact">
      <p>Let's connect! You can find me here:</p>
      <ContactRow>
        <span className="label">Location</span>Gujarat, India
      </ContactRow>
      <ContactRow>
        <span className="label">LinkedIn</span>
        <ContactLink
          href="https://www.linkedin.com/in/mayankrajput2110/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/mayankrajput2110
        </ContactLink>
      </ContactRow>
      <ContactRow>
        <span className="label">GitHub</span>
        <ContactLink
          href="https://github.com/hackelite01"
          target="_blank"
          rel="noreferrer"
        >
          github.com/hackelite01
        </ContactLink>
      </ContactRow>
      <ContactRow>
        <span className="label">Telegram</span>
        <ContactLink
          href="https://t.me/nonrootedinsaan"
          target="_blank"
          rel="noreferrer"
        >
          t.me/nonrootedinsaan
        </ContactLink>
      </ContactRow>
      <ContactHint>
        Type <span>email</span> to drop me a message, or <span>socials</span>{" "}
        for all my links.
      </ContactHint>
    </ContactWrapper>
  );
};

export default Contact;
