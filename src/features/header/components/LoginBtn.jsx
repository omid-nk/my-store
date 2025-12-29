import { HiOutlineArrowLeftEndOnRectangle } from "react-icons/hi2";

function LoginBtn() {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-1 rounded p-1.5 text-sm text-gray-800 transition-all hover:bg-gray-100">
      <HiOutlineArrowLeftEndOnRectangle className="h-6 w-6 rotate-180" />
      <span className="">Login | Signup</span>
    </div>
  );
}

export default LoginBtn;
