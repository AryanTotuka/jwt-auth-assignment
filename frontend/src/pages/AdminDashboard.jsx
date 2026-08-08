import { useNavigate } from "react-router-dom";

function AdminDashboard() {
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
        <h1>Admin Dashboard</h1>

        <div className="role-badge">
          Admin
        </div>

        <h2>Welcome, {user?.name}</h2>

        <p>Email: {user?.email}</p>

        <p>
          You have full administrative access.
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

export default AdminDashboard;