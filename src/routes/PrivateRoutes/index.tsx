import Sidebar from "layouts/Sidebar";
import Explore from "pages/Explore";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

const PrivateRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default PrivateRoutes;
