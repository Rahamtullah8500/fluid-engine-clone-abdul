import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



export default function ProtectedRoute() {
  const userInfo = useSelector((state) => state.UserSlice.userInfo);
  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth" />;
  }
}
