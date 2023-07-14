import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
