import styled from "styled-components";

export const AffIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const AffList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const AffItem = styled.li`
  margin-bottom: 0.6rem;
  line-height: 1.4rem;

  .role {
    font-weight: 700;
  }

  .meta {
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  &::before {
    content: "▹ ";
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
