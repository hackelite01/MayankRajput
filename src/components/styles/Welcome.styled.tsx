import styled, { keyframes } from "styled-components";

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  > div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }

  /* one-time boot reveal: stagger the info-section children */
  .info-section.boot > * {
    opacity: 0;
    animation: ${reveal} 0.45s ease forwards;
  }
  .info-section.boot > *:nth-child(1) {
    animation-delay: 0.05s;
  }
  .info-section.boot > *:nth-child(2) {
    animation-delay: 0.15s;
  }
  .info-section.boot > *:nth-child(3) {
    animation-delay: 0.3s;
  }
  .info-section.boot > *:nth-child(4) {
    animation-delay: 0.4s;
  }
  .info-section.boot > *:nth-child(5) {
    animation-delay: 0.5s;
  }
  .info-section.boot > *:nth-child(6) {
    animation-delay: 0.6s;
  }
  .info-section.boot > *:nth-child(7) {
    animation-delay: 0.7s;
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 0.8rem;
  line-height: 1.05;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 1rem;
  line-height: 1.1;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 0.4rem;
  line-height: 1;
  letter-spacing: 0;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
