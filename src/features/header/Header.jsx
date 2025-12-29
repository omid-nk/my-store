import Logo from "./components/Logo";
import Search from "./components/Search";
import LoginBtn from "./components/LoginBtn";
import Cartbtn from "./components/Cartbtn";
import NavItems from "./components/NavItems";

function Header() {
  return (
    <>
      <div className="mx-auto flex max-w-7xl justify-between gap-4 p-2">
        <div className="flex max-w-2xl flex-1 items-center gap-2">
          <Logo />
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <Cartbtn />
          <div className="h-8/12 border-r border-gray-400"></div>
          <LoginBtn />
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl justify-between">
        <NavItems />
      </nav>
    </>
  );
}

export default Header;
