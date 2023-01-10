import Sidebar from "../../components/Sidebar";
import useUser from "../../hooks/useUser";

export default function Home() {
  const { getName } = useUser();
  return (
    <Sidebar>
      <p>Bem vindo {getName("first")}</p>
    </Sidebar>
  );
}
