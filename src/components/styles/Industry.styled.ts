import styled from "styled-components";

export const IndustryIntro = styled.div`
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;

export const IndustryList = styled.div`
  margin-bottom: 1rem;

  .title {
    font-weight: 700;
    margin-bottom: 0.275rem;
    color: ${({ theme }) => theme.colors?.primary};
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
    line-height: 1.5rem;
    max-width: 560px;
    text-align: justify;
  }
`;
