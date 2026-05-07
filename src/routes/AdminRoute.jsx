import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("accessToken");

  const user = JSON.parse(localStorage.getItem("userInfo"));

  // cek login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // cek role admin
  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}
