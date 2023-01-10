import Layout from "../../components/Layout";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teachers.service";
import ResultsList from "../../components/ResultsList";
import Title from "../../components/Title";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getTeachers()
      .then((res) => setTeachers(res))
      .catch(({ response }) => {
        alert(response?.data?.error);
      });
  }, []);
  return (
    <Layout>
      <Title
        title="Professor"
        pluralTitle="Professores"
        showAdd
        addAction={() => alert("teste")}
      />

      <ResultsList
        columns={[
          {
            label: "Nome Completo",
            field: "fullname",
          },
          { label: "Preço/Hora", field: "price_hour" },
        ]}
        rows={teachers}
      />
    </Layout>
  );
}
