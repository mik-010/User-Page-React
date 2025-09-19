import { UserContext } from "../userProvider/UserProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ logoUrl }) {
  const {user, logout} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  const handleArticle = () =>{
    navigate(`/user/${user.id}/article`);
  }

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="sparkles">
          <div className="sparkles-logo">
            <img src={logoUrl} alt="sparkles" height="20px" width="20px" />
          </div>
          <h1>Personal Dashboard</h1>
        </div>
        <div className="dashboard">
          {!user && <p>Please log in to access your dasboard</p>}
          {user && (
            <>
              <p>
                Welcome back{user && <span>, {user.username}</span>}
              </p>
              <button className="log-out" onClick={handleArticle}>
                <img
                  src="/square-pen.svg"
                  alt="log-out"
                  height="20px"
                  width="20px"
                />
                Write an Article
              </button>
              <button className="log-out" onClick={handleLogout}>
                <img
                  src="/log-out.svg"
                  alt="log-out"
                  height="20px"
                  width="20px"
                />
                logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}