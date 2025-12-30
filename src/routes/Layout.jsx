import { Outlet } from "react-router";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";

const Layout = () => (
  <>
    <Header />
    <main className="mx-auto max-w-7xl">
      <Outlet />
    </main>
    <Footer />
  </>
);
export default Layout;
