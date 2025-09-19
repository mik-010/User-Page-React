import { UserContext } from "../userProvider/UserProvider";
import { useContext } from "react";
import "./Welcome.css";

export default function Welcome() {
  
  const { user} = useContext(UserContext)

  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = days[date.getDay()];
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <p className="message">Welcome back{user && <span>, {user.username}!</span>}</p>
      {!user && <p>Sign-in to access your dashboard</p>}
      {user && (
        <p>
          Today is {weekday}, {formattedDate}
        </p>
      )}
    </>
  );
}