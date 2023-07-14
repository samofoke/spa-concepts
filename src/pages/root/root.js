import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h2>The root layout</h2>
      <Outlet />
    </>
  );
};

export default RootLayout;
