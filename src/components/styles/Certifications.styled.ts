import styled from "styled-components";

export const CertIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const CertList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const CertItem = styled.li`
  margin-bottom: 0.6rem;
  line-height: 1.4rem;

  .name {
    font-weight: 700;
  }

  .issuer {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  &::before {
    content: "▹ ";
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
