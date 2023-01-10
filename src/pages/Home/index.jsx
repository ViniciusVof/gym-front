import useUser from "../../hooks/useUser";
export default function Home() {
  const { getName } = useUser();
  return <main>Bem vindo {getName("first")}</main>;
}
