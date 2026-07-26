import styled from "styled-components";

export const MatrixWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 320px;
  max-height: 520px;
  margin: 0.5rem 0 0.75rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  border-radius: 6px;
`;

export const MatrixCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
`;

export const InfoOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors?.body}D9;
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  border-radius: 6px;
  max-width: 90%;

  .name {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.15rem;
    color: ${({ theme }) => theme.colors?.primary};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors?.primary};
  }

  .role {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors?.text[100]};
  }

  .loc {
    margin-top: 0.35rem;
    color: ${({ theme }) => theme.colors?.text[200]};
  }

  .hint {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors?.secondary};
  }

  @media (max-width: 550px) {
    .name {
      font-size: 1.1rem;
    }
    .role {
      font-size: 0.85rem;
    }
  }
`;
