import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const ProjectsIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`;

export const Pager = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const PagerButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.primary};
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors?.primary};
    color: ${({ theme }) => theme.colors?.body};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors?.text[200]};
  font-size: 0.875rem;
`;
