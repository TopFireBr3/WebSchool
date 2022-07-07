import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField } from "@mui/material";

import { useHistory } from "react-router-dom";

import { RegisterInfoContext } from "../../contexts/Register/RegisterInfoContext";

import { useContext, useEffect, useState } from "react";

import { FormDiv, LeftDiv, RightDiv, StyledForm, StyledMain } from "./styles";

import education from "../../img/education.png";
import { api } from "../../api/api";

export const Register = () => {
  const [schools, setSchools] = useState({});
  console.log(schools);

  const { setInfoPartOne } = useContext(RegisterInfoContext);

  const history = useHistory();
  function goToRegisterComplement() {
    history.push(`/registerComplement`);
  }

  const schema = yup.object().shape({
    nome_escola: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Senha deve conter no mínimo 8 caracteres, pelo menos uma letra e um número."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
    codigo_acesso: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function registerSchool(data) {
    const { password, nome_escola, email, codigo_acesso } = data;
    const check = schools?.some(
      (school) => school.codigo_acesso === data.codigo_acesso
    );

    if (check) {
      setInfoPartOne({ password, nome_escola, email, codigo_acesso });
      goToRegisterComplement(data);
    } else {
      alert("codigo inválido");
    }
  }

  useEffect(() => {
    api
      .get("/escolas")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <>
      <StyledMain>
        <LeftDiv>
          <FormDiv>
            <h1>Registrar-se</h1>
            <StyledForm onSubmit={handleSubmit(registerSchool)}>
              <TextField
                required
                label="Nome da escola"
                error={!!errors.nome_escola}
                helperText={errors?.nome_escola?.message}
                {...register("nome_escola")}
                sx={{ width: "100%" }}
              />

              <TextField
                required
                label="Email institucional"
                error={!!errors.email}
                helperText={errors?.email?.message}
                {...register("email")}
                sx={{ width: "100%" }}
              />

              <TextField
                required
                label="Senha"
                type="password"
                error={!!errors.password}
                helperText={errors?.password?.message}
                {...register("password")}
                sx={{ width: "100%" }}
              />

              <TextField
                required
                label="Confirme a senha"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                {...register("confirmPassword")}
                sx={{ width: "100%" }}
              />

              <TextField
                required
                label="Código de acesso"
                error={!!errors.codigo_acesso}
                helperText={errors?.codigo_acesso?.message}
                {...register("codigo_acesso")}
                sx={{ width: "100%" }}
              />

              <button className="buttonRegister" type="submit">
                Cadastrar
              </button>
              <a href="google.com">voltar para a página inicial</a>
            </StyledForm>
          </FormDiv>
        </LeftDiv>

        <RightDiv>
          <img src={education} alt="education" />
        </RightDiv>
      </StyledMain>
    </>
  );
};
