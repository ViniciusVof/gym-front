import { useEffect, useState } from "react";
import {
  getUsers,
  registerUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} from "../../services/users.service";
import ResultsList from "../../components/ResultsList";
import Title from "../../components/Title";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/Form";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [type, setType] = useState("view");
  const navigate = useNavigate();

  const formFields = [
    {
      label: "Nome Completo",
      name: "fullname",
      fullWidth: true,
      required: true,
    },
    {
      label: "E-mail",
      name: "email",
      type: "email",
      fullWidth: true,
      required: true,
    },
  ];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: null,
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema:
      type === "new"
        ? Yup.object().shape({
            fullname: Yup.string().required("Campo obrigatório"),
            email: Yup.string()
              .email("Esse campo deve ser um e-mail")
              .required("Campo obrigatório"),
            password: Yup.string().required("Campo obrigatório"),
          })
        : Yup.object().shape({
            fullname: Yup.string().required("Campo obrigatório"),
            email: Yup.string()
              .email("Esse campo deve ser um e-mail")
              .required("Campo obrigatório"),
          }),
    onSubmit: (values) => {
      if (type === "new") {
        registerUsers(values)
          .then((user) => {
            setType("view");
            navigate("/users");
          })
          .catch(({ response }) => {
            alert(response?.data?.error);
          });
      } else {
        updateOneUser(values.id, values)
          .then((user) => {
            setType("view");
            navigate("/users");
          })
          .catch(({ response }) => {
            alert(response?.data?.error);
          });
      }
    },
  });

  function getUser(id) {
    setType("edit");
    getOneUser(id)
      .then((res) => {
        formik.setFieldValue("id", id);
        formik.setFieldValue("fullname", res?.fullname);
        formik.setFieldValue("email", res?.email);
        formik.setFieldValue("password", res?.password);
      })
      .catch(({ response }) => {
        alert(response?.data?.error);
      });
  }

  function deleteUser(id) {
    deleteOneUser(id)
      .then((res) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      })
      .catch(({ response }) => {
        alert(response?.data?.error);
      });
  }

  useEffect(() => {
    if (type === "view") {
      getUsers()
        .then((res) => setUsers(res))
        .catch(({ response }) => {
          alert(response?.data?.error);
        });
    }
  }, [type]);

  return (
    <main>
      <Title
        title="Usuário"
        pluralTitle="Usuários"
        showAdd
        addAction={() => setType("new")}
        type={type}
      />
      {type === "view" && (
        <ResultsList
          columns={[
            {
              label: "Nome Completo",
              field: "fullname",
            },
            { label: "E-mail", field: "email" },
          ]}
          rows={users}
          cbEditAction={(id) => getUser(id)}
          cbDeleteAction={(id) => deleteUser(id)}
        />
      )}
      {type === "new" ||
        (type === "edit" && (
          <Form
            fields={
              type === "new"
                ? [
                    {
                      label: "Senha",
                      name: "password",
                      type: "password",
                      fullWidth: true,
                      required: true,
                    },
                    ...formFields,
                  ]
                : [...formFields]
            }
            type={type}
            formik={formik}
          />
        ))}
    </main>
  );
}
