import TheHeader from "../components/shared/TheHeader";
import TheMain from "../components/loginpage/TheMain";
import TheFooter from "../components/shared/TheFooter";
import "./TheMain.css";

export default function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="page-wrapper">
      <TheHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <TheMain isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <TheFooter />
    </div>
  );
}
