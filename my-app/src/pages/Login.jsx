import Header from "../components/header/Header.jsx";
import Welcome from "../components/welcomeMessage/Welcome.jsx";
import SignIn from "../components/signInCard/Signin.jsx";

export default function LogIn() {

  return (
    <>
      <Header logoUrl="/sparkles.svg" />
      <div className="main">
        <Welcome />
        <SignIn />
      </div>
    </>
  );
}