import { Navigate, useLocation } from "react-router-dom";

/**
 * Checks if JWT exists and is not expired
 */
function isTokenValid() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Math.floor(Date.now() / 1000);

    // token expired
    if (payload.exp && payload.exp < now) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuth = isTokenValid();

  if (!isAuth) {
    return <Navigate to="/admin" replace state={{ from: location }} />;
  }

  return children;
}
