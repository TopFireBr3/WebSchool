import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  header {
    padding: 20px;
    width: 100%;
    height: 100px;
    background-color: var(--blue-1);
  }
`;

export const SliderContainer = styled.div`
  margin-top: 50px;

  width: 80%;

  img {
    width: 300px;
    background: var(--black);
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 730px;

  @media (max-width: 768px) {
    width: 305px;
  }
`;
