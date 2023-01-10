import * as React from "react";
import { useFormik } from "formik";
import { authenticate } from "../../services/users.service";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import * as Yup from "yup";
import * as S from "./styles";

export default function Login() {
  const navigate = useNavigate();
  const { saveUser } = useUser();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Esse campo deve ser um e-mail")
        .required("Campo obrigatório"),
      password: Yup.string().required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      authenticate(values.email, values.password)
        .then((user) => {
          saveUser(user.Authorization);
          navigate("/");
        })
        .catch(({ response }) => {
          alert(response.data.error);
        });
    },
  });

  return (
    <S.Wrapper>
      <S.Box>
        <form onSubmit={formik.handleSubmit}>
          <S.Title>Acessar Painel</S.Title>
          <S.FieldGroup>
            <S.TextField
              placeholder="Digite seu e-mail"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <S.HelperText>
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </S.HelperText>
          </S.FieldGroup>
          <S.FieldGroup>
            <S.TextField
              placeholder="Digite sua senha"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <S.HelperText>
              {formik.errors.password &&
                formik.touched.password &&
                formik.errors.password}
            </S.HelperText>
          </S.FieldGroup>
          <S.LoginButton disabled={formik.isSubmitting}>Entrar</S.LoginButton>
        </form>
      </S.Box>
    </S.Wrapper>
  );
}
