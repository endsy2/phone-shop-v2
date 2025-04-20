import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LoadingSpin from "../../utils/LoadingSpin";

const AuthLayout = () => {
  return (
    <>
      <div></div>
      <Suspense fallback={<LoadingSpin />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AuthLayout;
