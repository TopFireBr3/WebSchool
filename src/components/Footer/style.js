import styled from "styled-components";

export const ThemeFooter = styled.footer`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  .contact {
    display: none;
  }
  @media (min-width: 768px) {
    .contact {
      display: flex;
    }
  }
`;
