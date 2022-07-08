import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
  ThemeDiv,
  ThemeNav,
  ThemeMain,
  ThemeBackGround,
  ThemeForm,
} from "./style";
import { ModalContext } from "../../../../../contexts/modal/ContextModal";
import { useContext } from "react";
import axios from "axios";

const ModalProfessor = (prop) => {
  const formSchema = yup.object().shape({
    nome_professor: yup.string().required("Campo requerido"),
    email: yup.string().required("Campo requerido").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo requerido")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Senha Ivalida"
      ),
    twoPassword: yup
      .string()
      .required("Campo requerido")
      .oneOf([yup.ref("password")], "As Senhas são Diferentes"),
    gang: yup.string().required("Campo requerido"),
    shift: yup.string().required("Campo requerido"),
    matter: yup.string().required("Campo requerido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();

  const onSubmitFunction = (data) => {
    delete data.twoPassword;
    data = { ...data, type: "professor" };
    data.gang = data.gang.split(",");

    console.log(data);

    axios
      .post(`https://api-web-school.herokuapp.com/register`, data)
      .then((res) => {
        console.log(res);
        console.log("deu bom");
      })
      .catch((e) => {
        console.log(e);
        console.log("deu ruim");
      });

    history.push(`/${data.name}`);
  };

  return (
    <ThemeBackGround
      d={prop.dp}
      className="professor"
      bc="var(--bg-modal)"
      w="100vw"
      h="100vh"
      j="center"
      a="center"
    >
      <ThemeMain f="column" w="500px" h="550px" br="10px">
        <ThemeNav
          h="60px"
          a="center"
          bc="var(--pink-2)"
          j="flex-end"
          br="10px 10px 0px 0px"
        >
          <ThemeDiv j="space-between">
            <h2>Adicionar professor</h2>{" "}
            <p
              onClick={() => {
                prop.setProfessor();
              }}
            >
              X
            </p>
          </ThemeDiv>
        </ThemeNav>
        <ThemeForm
          onSubmit={handleSubmit(onSubmitFunction)}
          g="15px"
          h="50vh"
          f="column"
          bc="var(--blue-1)"
          j="center"
          a="center"
          br="0px 0px 10px 10px"
        >
          <input placeholder="   Nome" {...register("nome_professor")} />
          {errors.nome_professor?.message}
          <input placeholder="   E-mail" {...register("email")} />
          {errors.email?.message}
          <input placeholder="   Senha" {...register("password")} />
          {errors.password?.message}
          <input placeholder="   Repetir senha" {...register("twoPassword")} />
          {errors.twoPassword?.message}
          <input placeholder="   Turmas" {...register("gang")} />
          {errors.gang?.message}
          <input placeholder="   Turno" {...register("shift")} />
          {errors.shift?.message}
          <input placeholder="   Matéria" {...register("matter")} />
          {errors.matter?.message}
          <button type="submit">Enviar</button>
        </ThemeForm>
      </ThemeMain>
    </ThemeBackGround>
  );
};

export default ModalProfessor;
