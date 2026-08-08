import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="card dashboard">
        <h1>User Dashboard</h1>

        <div className="role-badge">
          User
        </div>

        <h2>Welcome, {user?.name}</h2>

        <p>Email: {user?.email}</p>

        <p>
          You have standard user access.
        </p>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;