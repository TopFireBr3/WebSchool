import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { useContext } from "react";

import { LeftDiv, RightDiv, StyledForm, StyledMain } from "../Register/styles";
import { FormDiv } from "./styles";

import earth from "../../img/earth.png";
import { RegisterInfoContext } from "../../contexts/Register/RegisterInfoContext";

export const RegisterComplement = () => {
  const { infoPartOne, infoPartTwo, setInfoPartTwo } =
    useContext(RegisterInfoContext);

  const schema = yup.object().shape({
    endereco: yup.string().required("Campo obrigatório!"),
    numero: yup.string().required("Campo obrigatório"),
    UF: yup.string().required("Campo obrigatório"),
    cidade: yup.string().required("Campo obrigatório"),
    bairro: yup.string().required("Campo obrigatório"),
    CEP: yup.string().required("Campo obrigatório"),
    diretor: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const cadastrar = (data) => {
    setInfoPartTwo({
      type: "instituicao",
      infos: { ...data },
    });

    const infoData = { ...infoPartOne, ...infoPartTwo };
    criarUsuario(infoData);
  };

  function criarUsuario(data) {
    const response = fetch("https://api-web-school.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    return response;
  }

  return (
    <>
      <StyledMain>
        <LeftDiv>
          <FormDiv>
            <h1>Informações complementares</h1>
            <StyledForm onSubmit={handleSubmit(cadastrar)}>
              <TextField
                required
                label="Endereço"
                error={!!errors.endereco}
                helperText={errors?.endereco?.message}
                {...register("endereco")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="Número"
                error={!!errors.numero}
                helperText={errors?.numero?.message}
                {...register("numero")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="UF"
                error={!!errors.UF}
                helperText={errors?.UF?.message}
                {...register("UF")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="Cidade"
                error={!!errors.cidade}
                helperText={errors?.cidade?.message}
                {...register("cidade")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="Bairro"
                error={!!errors.bairro}
                helperText={errors?.bairro?.message}
                {...register("bairro")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="CEP"
                error={!!errors.CEP}
                helperText={errors?.CEP?.message}
                {...register("CEP")}
                sx={{ width: "90%" }}
              />

              <TextField
                required
                label="Diretor"
                error={!!errors.diretor}
                helperText={errors?.diretor?.message}
                {...register("diretor")}
                sx={{ width: "90%" }}
              />

              <button type="submit" className="buttonRegister">
                Enviar
              </button>
              <a href="google.com">Voltar</a>
            </StyledForm>
          </FormDiv>
        </LeftDiv>

        <RightDiv>
          <img src={earth} alt="education"></img>
        </RightDiv>
      </StyledMain>
    </>
  );
};
