import styled from "styled-components";

export const NeofetchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const Logo = styled.pre`
  color: ${({ theme }) => theme.colors?.primary};
  margin: 0;
  line-height: 1.1;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Info = styled.div`
  line-height: 1.5rem;

  .head {
    color: ${({ theme }) => theme.colors?.secondary};
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .rule {
    color: ${({ theme }) => theme.colors?.text[300]};
    margin-bottom: 0.25rem;
  }

  .key {
    color: ${({ theme }) => theme.colors?.primary};
    font-weight: 700;
  }

  .val {
    color: ${({ theme }) => theme.colors?.text[100]};
  }
`;
