import styled from "styled-components";

export const SkillsIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const SkillGroup = styled.div`
  margin-bottom: 1rem;

  .category {
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors?.primary};
  }
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const SkillTag = styled.span`
  border: 1px solid ${({ theme }) => theme.colors?.text[300]};
  color: ${({ theme }) => theme.colors?.text[200]};
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;
