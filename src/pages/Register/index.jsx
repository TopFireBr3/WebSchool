import { useContext, useEffect, useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, TextField } from "@mui/material";

import { useHistory } from "react-router-dom";

import { RegisterInfoContext } from "../../contexts/register/RegisterInfoContext";

import { FormDiv, LeftDiv, RightDiv, StyledForm, StyledMain } from "./styles";

import { api } from "../../services/api";

import { toast } from "react-toastify";

import education from "../../assets/Education-rafiki.svg";

export const Register = () => {
  const [schools, setSchools] = useState({});

  const { setInfoPartOne } = useContext(RegisterInfoContext);

  const history = useHistory();

  const schema = yup.object().shape({
    nome_escola: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Senha deve conter no mínimo 6 caracteres, pelo menos uma letra e um número."
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
    codigo_acesso: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function registerSchool(data) {
    const { password, nome_escola, email, codigo_acesso } = data;
    const check = schools?.some(
      (school) => school.codigo_acesso === +data.codigo_acesso
    );

    if (check) {
      setInfoPartOne({ password, nome_escola, email, codigo_acesso });

      history.push(`/registerComplement`);
    } else {
      toast.error("codigo inválido");
    }
  }

  useEffect(() => {
    api
      .get("/escolas")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((_) => toast.error("Ops! algo deu errado."));
  }, []);
  console.log(errors);
  return (
    <>
      <StyledMain>
        <LeftDiv>
          <FormDiv>
            <h1>Registrar-se</h1>

            <StyledForm onSubmit={handleSubmit(registerSchool)}>
              <Input
                placeholder="Nome da escola"
                error={!!errors.nome_escola}
                {...register("nome_escola")}
                style={{
                  marginTop: !!errors.nome_escola ? "-5px" : "10px",
                  width: "100%",
                }}
              />
              {errors.nome_escola && (
                <span className="error">{errors.nome_escola.message}</span>
              )}

              <Input
                placeholder="Email institucional"
                error={!!errors.email}
                {...register("email")}
                style={{
                  marginTop: !!errors.email ? "-5px" : "10px",
                  width: "100%",
                }}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}

              <Input
                placeholder="Senha"
                type="password"
                error={!!errors.password}
                {...register("password")}
                style={{
                  marginTop: !!errors.password ? "-5px" : "10px",
                  width: "100%",
                }}
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}

              <Input
                placeholder="Confirme a senha"
                type="password"
                error={!!errors.confirmPassword}
                {...register("confirmPassword")}
                style={{
                  marginTop: !!errors.confirmPassword ? "-5px" : "10px",
                  width: "100%",
                }}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}

              <Input
                type="number"
                placeholder="Código de acesso"
                error={!!errors.codigo_acesso}
                {...register("codigo_acesso")}
                style={{
                  marginTop: !!errors.codigo_acesso ? "-5px" : "10px",
                  width: "100%",
                }}
              />
              {errors.codigo_acesso && (
                <span className="error">{errors.codigo_acesso.message}</span>
              )}

              <Button
                variant="contained"
                className="buttonRegister"
                type="submit"
              >
                Cadastrar
              </Button>

              <Link onClick={() => history.push("/")}>
                voltar para a página inicial
              </Link>
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
