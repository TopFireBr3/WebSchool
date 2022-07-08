import { useContext } from "react";

import { LeftDiv, RightDiv, StyledForm, StyledMain } from "../Register/styles";
import { FormDiv } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@mui/material";

import { toast } from "react-toastify";

import { RegisterInfoContext } from "../../contexts/register/RegisterInfoContext";

import { api } from "../../services/api";

import earth from "../../assets/Globalization-pana.svg";

import { Link } from "react-router-dom";

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
    api
      .post("/register", data)
      .then((_) => toast.success("Sucesso ao cadastrar-se."))
      .catch((_) => toast.error("Ops! algo deu errado."));
  }

  return (
    <>
      <StyledMain>
        <LeftDiv>
          <FormDiv>
            <h1>Informações complementares</h1>

            <StyledForm onSubmit={handleSubmit(cadastrar)}>
              <TextField
                label="Endereço"
                error={!!errors.endereco}
                helperText={errors?.endereco?.message}
                {...register("endereco")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="Número"
                error={!!errors.numero}
                helperText={errors?.numero?.message}
                {...register("numero")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="UF"
                error={!!errors.UF}
                helperText={errors?.UF?.message}
                {...register("UF")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="Cidade"
                error={!!errors.cidade}
                helperText={errors?.cidade?.message}
                {...register("cidade")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="Bairro"
                error={!!errors.bairro}
                helperText={errors?.bairro?.message}
                {...register("bairro")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="CEP"
                error={!!errors.CEP}
                helperText={errors?.CEP?.message}
                {...register("CEP")}
                sx={{ width: "90%" }}
              />

              <TextField
                label="Diretor"
                error={!!errors.diretor}
                helperText={errors?.diretor?.message}
                {...register("diretor")}
                sx={{ width: "90%" }}
              />

              <button type="submit" className="buttonRegister">
                Enviar
              </button>

              <Link to="/register">Voltar</Link>
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
