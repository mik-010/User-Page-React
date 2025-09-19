import Input from "./input/Input";
import { useState, useContext } from "react";
import { UserContext } from "../userProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const id = Date.now();

  const validEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim()) {
      console.log("Please fill out both fields.");
      return;
    }

    if (!validEmail(email)) {
      console.log("Invalid email format.");
      return;
    }

    const newUser = { username, email, id };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
    navigate(`user/${newUser.id}`);
    console.log("User signed in:", newUser);

    setUsername("");
    setEmail("");
  };

  return (
    <form className="signin-wrapper" onSubmit={handleSubmit}>
      <Input
        inputLogo="/user.svg"
        inputPlaceholder="Enter your username"
        inputPurpose="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        inputLogo="/mail.svg"
        inputPlaceholder="Enter your email"
        inputPurpose="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="signin-btn">
        Sign-in
      </button>
    </form>
  );
}