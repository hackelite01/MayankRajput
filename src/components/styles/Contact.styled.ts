import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;

  p {
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const ContactRow = styled.div`
  margin-bottom: 0.4rem;
  line-height: 1.5rem;

  .label {
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.primary};
    margin-right: 0.4rem;
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;

export const ContactHint = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors?.text[200]};

  span {
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
