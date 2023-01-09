import Login from "pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

interface Props {}

export const PublicRoutes: React.FC<Props> = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
