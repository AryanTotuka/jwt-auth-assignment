import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
  allowedRoles
}) {
  const token = localStorage.getItem("token");

  const storedUser = localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/user" />;
  }

  return children;
}

export default ProtectedRoute;