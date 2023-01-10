import { Router } from "./routes";
import { UserProvider } from "./contexts/UserContext";

export default function Main() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
