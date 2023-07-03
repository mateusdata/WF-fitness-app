import React, { useContext } from "react";
import { Context } from "../context/AuthProvider";
import PublicRoutes from "./public/publicRoutes";
import PrivateRoutes from "./private/privateRoutes";

const Routes = () => {
  const { logado, } = useContext(Context);

  return !logado ? <PublicRoutes /> : <PrivateRoutes /> ;
};

export default Routes;