import { HiOutlineShoppingBag } from "react-icons/hi2";

function Cartbtn() {
  return (
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center">
      <HiOutlineShoppingBag className="h-6 w-6 text-gray-800" />
    </div>
  );
}

export default Cartbtn;
