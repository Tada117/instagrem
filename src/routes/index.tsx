import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

type Status = "authenticated" | "no-authenticated";

const status: Status = "authenticated";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
