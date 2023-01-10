import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import useUser from "../../hooks/useUser";
import * as S from "./styles";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Recibos",
    path: "/",
    icon: <FaIcons.FaReceipt />,
  },
  {
    title: "Professores",
    path: "/",
    icon: <FaIcons.FaWalking />,
  },
  {
    title: "Usuários",
    path: "/",
    icon: <FaIcons.FaUserFriends />,
  },
];

export default function Sidebar({ children }) {
  const [isOpened, setIsOpened] = useState(true);
  const toggleMenu = () => setIsOpened(!isOpened);

  const { logoutUser } = useUser();
  return (
    <>
      <S.Navbar>
        <S.MenuIconOpen to="#" onClick={toggleMenu}>
          <FaIcons.FaBars />
        </S.MenuIconOpen>
        <p>GymFull</p>
      </S.Navbar>

      <S.SidebarMenu isOpened={isOpened}>
        <S.MenuIconClose to="#" onClick={toggleMenu}>
          <FaIcons.FaTimes />
        </S.MenuIconClose>
        {SidebarData.map((item, index) => {
          return (
            <S.MenuItems key={index}>
              <S.MenuItemLinks to={item.path}>
                {item.icon}
                <S.MenuLinkText>{item.title}</S.MenuLinkText>
              </S.MenuItemLinks>
            </S.MenuItems>
          );
        })}
        <S.MenuItems>
          <S.MenuItemLinks to="#" onClick={() => logoutUser()}>
            <FaIcons.FaDoorOpen />
            <S.MenuLinkText>Sair</S.MenuLinkText>
          </S.MenuItemLinks>
        </S.MenuItems>
      </S.SidebarMenu>
      <S.Content isOpened={isOpened}>{children}</S.Content>
    </>
  );
}
