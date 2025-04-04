import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Import CSS for styles

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>Oops! Page Not Found</h1>
        <p>
          Looks like you've wandered off the path. But don’t worry, you’re just a
          click away from home!
        </p>
        <button className="home-button" onClick={() => navigate("/")}>
          Take Me Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
