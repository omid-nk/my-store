import { Outlet } from "react-router";
import Header from "../features/header/Header";
import Footer from "../features/footer/Footer";

const Layout = () => (
  <>
    <Header />
    <main className="container mx-auto py-10">
      <Outlet />
    </main>
    <Footer />
  </>
);
export default Layout;
