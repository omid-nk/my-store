function NavItems() {
  return (
    <ul className="flex items-center gap-2 px-2">
      <li className="nav-item cursor-pointer px-1 py-0.5">
        <a href="#">Home</a>
      </li>
      <li className="nav-item cursor-pointer px-2 py-0.5">
        <a href="#">Shop</a>
      </li>
      <li className="nav-item cursor-pointer px-1 py-0.5">
        <a href="#">About us</a>
      </li>
      <li className="nav-item cursor-pointer px-1 py-0.5">
        <a href="#">Contact us</a>
      </li>
    </ul>
  );
}

export default NavItems;
