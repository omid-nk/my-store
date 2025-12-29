import { HiMagnifyingGlass } from "react-icons/hi2";

function Search() {
  return (
    <div className="flex w-full max-w-xl items-center rounded bg-gray-100 px-2 text-gray-600">
      <label htmlFor="search">
        <HiMagnifyingGlass className="h-5 w-5 cursor-pointer text-gray-800" />
      </label>
      <input
        id="search"
        className="w-full p-2 outline-0"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
