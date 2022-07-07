import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ThemeDiv, ThemeSection, ThemeTextDiv } from "./style";

import imgHome1 from "../../assets/Teaching.gif";
import imgHome2 from "../../assets/Happy student-pana.svg";

const Home = () => {
  return (
    <>
      <Header />
      <ThemeSection f="column" a="center" g="10%" w="100%">
        <ThemeTextDiv f="column" g="10%" w="80%" a="center" m="30px">
          <ThemeDiv f="column" a="center" w="100%" g="30px" j="center">
            <h2>Quem somos ?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </ThemeDiv>
          <img src={imgHome1} alt="Menina escrevendo no quadro" />
        </ThemeTextDiv>
        <ThemeTextDiv f="column" g="10%" w="80%" a="center" m="30px">
          <img className="img2" src={imgHome2} alt="Estudantes felizes" />
          <ThemeDiv
            f="column"
            a="center"
            m="0px 0px 40px 0px"
            g="30px"
            j="center"
          >
            <h2>Oque oferecemos ?</h2>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </span>
          </ThemeDiv>
        </ThemeTextDiv>
      </ThemeSection>
      <Footer />
    </>
  );
};

export default Home;
